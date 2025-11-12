import { NextResponse } from 'next/server';

const REQUIRED_FIELDS = ['parentName', 'childName', 'grade', 'department', 'email', 'phone'] as const;

type EnrollBody = {
  parentName: string;
  childName: string;
  grade: string;
  department: 'arabic' | 'languages' | string;
  email: string;
  phone: string;
};

export async function POST(req: Request) {
  try {
    const payload = (await req.json()) as Partial<EnrollBody>;

    for (const key of REQUIRED_FIELDS) {
      if (!payload[key] || String(payload[key]).trim() === '') {
        return NextResponse.json(
          { ok: false, error: `Missing field: ${key}` },
          { status: 400 }
        );
      }
    }

    const upstreamUrl = process.env.ENROLL_API_URL;
    const cfAccessClientId = process.env.CF_ACCESS_CLIENT_ID;
    const cfAccessClientSecret = process.env.CF_ACCESS_CLIENT_SECRET;

    if (!upstreamUrl || !cfAccessClientId || !cfAccessClientSecret) {
      return NextResponse.json(
        { ok: false, error: 'Server not configured' },
        { status: 500 }
      );
    }

    const upstream = await fetch(upstreamUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'CF-Access-Client-Id': cfAccessClientId,
        'CF-Access-Client-Secret': cfAccessClientSecret,
      },
      body: JSON.stringify(payload),
    });

    if (!upstream.ok) {
      const text = await upstream.text().catch(() => '');
      return NextResponse.json(
        { ok: false, error: 'Upstream error', details: text.slice(0, 500) },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json(
      { ok: false, error: 'Invalid request' },
      { status: 400 }
    );
  }
}


