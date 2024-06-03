import { MongoClient, ServerApiVersion, Db, Collection } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_DB: string;
    }
  }
}

// Initialize the MongoClient with the database URI from environment variables
const client = new MongoClient(process.env.NEXT_PUBLIC_DB, {
  serverApi: ServerApiVersion.v1,
});

export async function GET(): Promise<NextResponse> {
  try {
    const database: Db = client.db("uidata");
    const datas: Collection = database.collection("data");

    const result = await datas.find({}).toArray();

    // Return a success response
    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    // Log the error for debugging purposes
    console.error("Failed to connect to MongoDB", error);

    // Return an error response
    return NextResponse.json({ error: (error as Error).message });
  }
}
