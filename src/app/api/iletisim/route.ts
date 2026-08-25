import { NextResponse } from "next/server";

const KONULAR = ["soru", "istek", "sikayet", "oneri", "uyelik", "isbirligi"];

export async function POST(request: Request) {
  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Geçersiz istek." }, { status: 400 });
  }

  // Honeypot: botlar gizli alanı doldurur, sessizce basarili gibi don
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const subject = (body.subject ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!name || !email || !message || !KONULAR.includes(subject)) {
    return NextResponse.json(
      { error: "Lütfen tüm zorunlu alanları doldurun." },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || name.length > 200 || message.length > 5000) {
    return NextResponse.json(
      { error: "Lütfen alanları kontrol edin." },
      { status: 400 }
    );
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    return NextResponse.json(
      { error: "Form gönderimi henüz yapılandırılmadı. Lütfen daha sonra tekrar deneyin." },
      { status: 503 }
    );
  }

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `GESİDER İletişim Formu: ${subject}`,
      from_name: "GESİDER Web Sitesi",
      name,
      email,
      konu: subject,
      message,
    }),
  });

  if (!res.ok) {
    return NextResponse.json(
      { error: "Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
