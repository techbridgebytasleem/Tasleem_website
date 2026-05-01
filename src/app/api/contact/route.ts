import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
    }

    const airtableToken = process.env.AIRTABLE_PERSONAL_ACCESS_TOKEN;
    const airtableBaseId = process.env.AIRTABLE_BASE_ID;
    const airtableTableName = process.env.AIRTABLE_TABLE_NAME || 'Contact Submissions';

    if (!airtableToken || !airtableBaseId) {
      return NextResponse.json(
        { error: 'Airtable is not configured. Please set AIRTABLE_PERSONAL_ACCESS_TOKEN and AIRTABLE_BASE_ID environment variables.' },
        { status: 500 }
      );
    }

    const airtableResponse = await fetch(
      `https://api.airtable.com/v0/${airtableBaseId}/${encodeURIComponent(airtableTableName)}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${airtableToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fields: {
            Name: name,
            Email: email,
            Company: company || '',
            Subject: subject || '',
            Message: message,
          },
        }),
      }
    );

    const airtableData = await airtableResponse.json();

    if (!airtableResponse.ok) {
      const errorMessage =
        airtableData?.error?.message ||
        airtableData?.error?.type ||
        `Airtable responded with status ${airtableResponse.status}`;
      throw new Error(errorMessage);
    }

    return NextResponse.json({ success: true, recordId: airtableData.id });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Internal server error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
