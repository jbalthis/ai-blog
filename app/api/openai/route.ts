import openai from "@/libs/openai";
import { NextResponse } from "next/server";
import { AxiosResponse } from "axios";
import { CreateChatCompletionResponse } from "openai";

export async function POST(request: Request) {
  try {
    const { title, role } = await request.json();

    const aiResponse: AxiosResponse<CreateChatCompletionResponse, any> =
      await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `Create small blog post with html tags based on this title: ${title}`,
          },
          {
            role: "system",
            content: `${
              role || "I am a helpful assistant"
            }. Write with html tags.`,
          },
        ],
      });

    return NextResponse.json(
      {
        content: aiResponse.data.choices[0].message?.content,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.log("OPENAI_REQUEST_ERROR", error);
    return NextResponse.json(
      { error: "error updating openai route" },
      { status: 500 }
    );
  }
}
