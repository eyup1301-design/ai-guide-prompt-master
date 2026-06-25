"use client";

import { useEffect, useState } from "react";

export default function FeedbackAdminPage() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const key = new URLSearchParams(window.location.search).get("key");
    fetch(`/api/feedback?key=${encodeURIComponent(key || "")}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setItems(data.feedback || []);
        }
      })
      .catch(() => setError("Bir hata oluştu."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#14171C",
        color: "#ECEEF1",
        padding: "48px 20px",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <h1 style={{ fontSize: 22, fontWeight: 700, marginBottom: 24 }}>
          Geri Bildirimler
        </h1>

        {loading && <p style={{ color: "#8B92A0" }}>Yükleniyor...</p>}

        {error && (
          <p style={{ color: "#F87171", fontSize: 14 }}>
            {error === "Yetkisiz erişim."
              ? "Yetkisiz erişim — URL'nin sonunda doğru ?key= değeri olduğundan emin ol."
              : error}
          </p>
        )}

        {!loading && !error && items.length === 0 && (
          <p style={{ color: "#8B92A0", fontSize: 14 }}>
            Henüz geri bildirim yok.
          </p>
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {items.map((item, i) => (
            <div
              key={i}
              style={{
                background: "#1C2128",
                border: "1px solid #2A2F38",
                borderRadius: 12,
                padding: 16,
              }}
            >
              <p style={{ fontSize: 11, color: "#8B92A0", marginBottom: 6 }}>
                {item.date ? new Date(item.date).toLocaleString("tr-TR") : ""}
              </p>
              <p
                style={{
                  fontSize: 14,
                  whiteSpace: "pre-wrap",
                  lineHeight: 1.5,
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}