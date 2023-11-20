import Stripe from "stripe";
import { NextResponse } from "next/server";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: Request, response: Response) {
  const { title, price } = await request.json();

  if (request.method === "POST") {
    try {
      // チェックアウトセッションの作成
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "jpy",
              product_data: {
                name: title,
              },
              unit_amount: price,
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `${request.headers.get("origin")}/?success=true`,
        cancel_url: `${request.headers.get("origin")}/?canceled=true`,
      });

      return NextResponse.json({ sessionId: session.id });
    } catch (err: any) {
      return NextResponse.json({ message: err.message });
    }
  } else {
    // response.setHeader("Allow", "POST");
    // response.status(405).end("Method Not Allowed");
  }
}
