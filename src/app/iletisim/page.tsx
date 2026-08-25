"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function IletisimPage() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setErrorMessage("");
    try {
      const res = await fetch("/api/iletisim", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(json.error ?? "Mesaj gönderilemedi.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin."
      );
    }
  }

  return (
    <>
      <section className="section-padding pt-24 lg:pt-28">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            <div className="lg:col-span-3">
              <Card className="p-8 lg:p-10" hover={false}>
                <h2 className="text-2xl font-bold text-text-primary mb-6">
                  Bize Yazın
                </h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* Honeypot - botlara karsi gizli alan */}
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden="true"
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-text-secondary mb-2">
                        Ad Soyad *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        maxLength={200}
                        className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                        placeholder="Ad Soyad"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-secondary mb-2">
                        E-posta *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                        placeholder="ornek@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">
                      Konu *
                    </label>
                    <select
                      name="subject"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                    >
                      <option value="">Konu Seçiniz</option>
                      <option value="soru">Soru</option>
                      <option value="istek">İstek</option>
                      <option value="sikayet">Şikayet</option>
                      <option value="oneri">Öneri</option>
                      <option value="uyelik">Üyelik Bilgisi</option>
                      <option value="isbirligi">İş Birliği</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">
                      Mesajınız *
                    </label>
                    <textarea
                      rows={6}
                      name="message"
                      required
                      maxLength={5000}
                      className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                      placeholder="Mesajınızı buraya yazın..."
                    />
                  </div>

                  {status === "success" && (
                    <div className="flex items-center gap-2 rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-600">
                      <CheckCircle2 className="w-5 h-5 shrink-0" />
                      Mesajınız gönderildi. En kısa sürede size dönüş yapacağız.
                    </div>
                  )}
                  {status === "error" && (
                    <div className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-600">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      {errorMessage}
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto"
                    disabled={status === "sending"}
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {status === "sending" ? "Gönderiliyor..." : "Mesajı Gönder"}
                  </Button>
                </form>
              </Card>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="p-6" hover={false}>
                  <h3 className="text-lg font-semibold text-text-primary mb-5">
                    İletişim Bilgileri
                  </h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-text-primary mb-1">
                          Adres
                        </h4>
                        <p className="text-sm text-text-secondary leading-relaxed">
                          {siteConfig.address}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-text-primary mb-1">
                          Telefon
                        </h4>
                        <a
                          href={`tel:${siteConfig.phone}`}
                          className="text-sm text-text-secondary hover:text-primary transition-colors"
                        >
                          {siteConfig.phone}
                        </a>
                        <p className="text-xs text-text-muted mt-1">
                          Faks: {siteConfig.fax}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-text-primary mb-1">
                          E-posta
                        </h4>
                        <a
                          href={`mailto:${siteConfig.email}`}
                          className="text-sm text-text-secondary hover:text-primary transition-colors"
                        >
                          {siteConfig.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-text-primary mb-1">
                          Çalışma Saatleri
                        </h4>
                        <p className="text-sm text-text-secondary">
                          Pazartesi - Cuma: 09:00 - 18:00
                        </p>
                        <p className="text-xs text-text-muted mt-1">
                          Cumartesi - Pazar: Kapalı
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="overflow-hidden" hover={false}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.7!2d29.02!3d41.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDA0JzQ4LjAiTiAyOcKwMDEnMTIuMCJF!5e0!3m2!1str!2str!4v1"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="GESİDER Konum"
                    className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                  />
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
