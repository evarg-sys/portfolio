import { NextResponse } from "next/server";

const SYSTEM_CONTEXT = `You are a helpful assistant for Eric Varghese's portfolio. Eric is a data science student at UIC. Answer questions about his projects (e.g. Project Trishul, OpenEVMap, RoleBit, NASDAQ Quant, Grocery Store DB, Behind the Stars, Flappy Bird, Avian Flu Prediction Bot, Loan Default Prediction, Demand Forecasting, Quant Regime Strategy), research, courses, certifications, and experience. Naming rules: if the user says "Emergency Response AI" or "Disaster Response AI", refer to it as "Project Trishul" and point to /projects/disaster-response-ai. If the user asks about Eric's independent study in quant, refer to "Quant Regime Strategy" and point to /projects/quant-regime-strategy. If the user asks for Eric's resume or CV, let them know it can be viewed and downloaded at /resume. Be concise and friendly. If asked something you don't know, say so and suggest visiting the site or contacting Eric at evarg22@uic.edu.`;

const PLACEHOLDER_REPLY =
  "The assistant is not configured on this deployment. Add HF_API_KEY in the environment to enable it.";

export async function POST(request: Request) {
  try {
    const { message } = (await request.json()) as { message?: string };
    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { reply: "Please send a valid message." },
        { status: 400 }
      );
    }

    const apiKey = process.env.HF_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ reply: PLACEHOLDER_REPLY });
    }

    const res = await fetch(
      "https://router.huggingface.co/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "Qwen/Qwen2.5-7B-Instruct",
          messages: [
            { role: "system", content: SYSTEM_CONTEXT },
            { role: "user", content: message },
          ],
          max_tokens: 400,
          temperature: 0.7,
        }),
      }
    );

    if (!res.ok) {
      const err = await res.text();
      console.error("HuggingFace API error:", res.status, err);
      // Model may still be warming up — give a friendlier message
      const isLoading = err.includes("loading") || res.status === 503;
      return NextResponse.json({
        reply: isLoading
          ? "The assistant is warming up — please try again in a few seconds."
          : "The AI service is temporarily unavailable. Please try again later.",
      });
    }

    const data = (await res.json()) as {
      choices?: Array<{ message?: { content?: string } }>;
    };
    const text =
      data.choices?.[0]?.message?.content?.trim() ||
      "I couldn't generate a response. Try rephrasing or ask Eric directly at evarg22@uic.edu.";

    return NextResponse.json({ reply: text });
  } catch (e) {
    console.error("Chat API error:", e);
    return NextResponse.json(
      {
        reply:
          "Something went wrong. Try again or email evarg22@uic.edu.",
      },
      { status: 500 }
    );
  }
}
