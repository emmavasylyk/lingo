import { NextResponse } from "next/server";

import db from "@/db/drizzle";
import { isAdmin } from "@/lib/admin";
import { challenges } from "@/db/schema";

export const GET = async (request: Request) => {
  if (!isAdmin()) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const url = new URL(request.url);
  const text = url.searchParams.get("question");

  const page = parseInt(url.searchParams.get("_page") || "1", 10);
  const limit = parseInt(url.searchParams.get("_limit") || "10", 10);

  const filters: any = {};
  if (text) {
    filters.text = { includes: text };
  }

  let data = await db.query.challenges.findMany();

  if (text) {
    data = data.filter((challenge) =>
      challenge.question.toLowerCase().includes(text.toLowerCase())
    );
  }

  const startIndex = (page - 1) * limit;
  const paginatedData = data.slice(startIndex, startIndex + limit);

  return new NextResponse(JSON.stringify(paginatedData), {
    headers: { "X-Total-Count": data.length.toString() },
  });

  // const data = await db.query.challenges.findMany();

  // return NextResponse.json(data);
};

export const POST = async (req: Request) => {
  if (!isAdmin()) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const body = await req.json();

  const data = await db
    .insert(challenges)
    .values({
      ...body,
    })
    .returning();

  return NextResponse.json(data[0]);
};
