import Card from "./components/Card";
import { useState } from "react";
const questions = [
  {
    number: 1,
    description:
      "當 TCP/IP 網路連線時,可以透過 ___ 進行檢視目前主機上連線狀態與封包的統計資訊等等。",
    answer: 4,
    options: [
      { label: 1, description: "ping" },
      { label: 2, description: "cd" },
      { label: 3, description: "arp" },
      { label: 4, description: "netstat" },
    ],
  },
  {
    number: 2,
    description: "TCP 標頭的長度為 ___ bytes。",
    answer: 1,
    options: [
      { label: 1, description: "20" },
      { label: 2, description: "32" },
      { label: 3, description: "8" },
      { label: 4, description: "24" },
    ],
  },
  {
    number: 3,
    description: "UCP 標頭的長度為 ___ bytes。",
    answer: 3,
    options: [
      { label: 1, description: "20" },
      { label: 2, description: "32" },
      { label: 3, description: "8" },
      { label: 4, description: "24" },
    ],
  },
  {
    number: 4,
    description: "TCP 連線建立的過程 3 個順序步驟為 ___。",
    answer: 1,
    options: [
      { label: 1, description: "SYN, SYN-ACK, ACK" },
      { label: 2, description: "SYN-ACK, SYN, ACK" },
      { label: 3, description: "SYN, ACK, SYN-ACK" },
      { label: 4, description: "ACK, SYN-ACK, SYN" },
    ],
  },
  {
    number: 5,
    description: "TCP 進行雙方的同步溝通時,那一位元會被設定為 1 ___。",
    answer: 4,
    options: [
      { label: 1, description: "FIN" },
      { label: 2, description: "FO" },
      { label: 3, description: "ACK" },
      { label: 4, description: "SYN" },
    ],
  },
  {
    number: 6,
    description: "哪一種協定需要三方交握 ___。",
    answer: 4,
    options: [
      { label: 1, description: "ARP" },
      { label: 2, description: "ICMP" },
      { label: 3, description: "UDP" },
      { label: 4, description: "TCP" },
    ],
  },
  {
    number: 7,
    description: "TCP 協定的 16 進位值為 ___。",
    answer: 2,
    options: [
      { label: 1, description: "0x01" },
      { label: 2, description: "0x06" },
      { label: 3, description: "0x11" },
      { label: 4, description: "0x17" },
    ],
  },
  {
    number: 8,
    description: "UDP 協定的 16 進位值為 ___。",
    answer: 3,
    options: [
      { label: 1, description: "0x01" },
      { label: 2, description: "0x06" },
      { label: 3, description: "0x11" },
      { label: 4, description: "0x17" },
    ],
  },
  {
    number: 9,
    description:
      "某一方告訴對方自己 TCP 傳送資料已經結束,那一位元會被設定為 1 ___。",
    answer: 1,
    options: [
      { label: 1, description: "FIN" },
      { label: 2, description: "FCS" },
      { label: 3, description: "ACK" },
      { label: 4, description: "SYN" },
    ],
  },
  {
    number: 10,
    description:
      "主機 A 在確定主機 B 正確地收到目前所傳送的封包之前,不會再傳送新的資料稱為 ___ 協定。",
    answer: 3,
    options: [
      { label: 1, description: "GBN" },
      { label: 2, description: "SR" },
      { label: 3, description: "停止並等待 (Stop-and-Wait)" },
      { label: 4, description: "以上皆可" },
    ],
  },
  {
    number: 11,
    description: "網域「.yahoo.com.tw.」、「.google.com.tw.」均同屬於 ___。",
    answer: 3,
    options: [
      { label: 1, description: "根網域" },
      { label: 2, description: "頂層網域" },
      { label: 3, description: "第二層網域" },
      { label: 4, description: "主機名稱" },
    ],
  },
  {
    number: 12,
    description:
      "在 Internet 上的著名機構大都擁有供給眾多人存取的主機稱為 ___。",
    answer: 3,
    options: [
      { label: 1, description: "根 DNS 伺服器" },
      { label: 2, description: "頂層網域 DNS 伺服器" },
      { label: 3, description: "官方 DNS 伺服器" },
      { label: 4, description: "NAT 以提供給客戶存取的 DNS 記錄" },
    ],
  },
  {
    number: 13,
    description: "當客戶端主機送出 DNS 查詢訊息時,就會先送至 ___。",
    answer: 4,
    options: [
      { label: 1, description: "根 DNS 伺服器" },
      { label: 2, description: "頂層網域 DNS 伺服器" },
      { label: 3, description: "官方 DNS 伺服器" },
      { label: 4, description: "本地 DNS 伺服器" },
    ],
  },
  {
    number: 14,
    description: "哪一種 DNS 伺服器沒有管理任何的 Zone ___。",
    answer: 3,
    options: [
      { label: 1, description: "主要名稱 DNS 伺服器" },
      { label: 2, description: "次要名稱 DNS 伺服器" },
      { label: 3, description: "快取 DNS 伺服器" },
      { label: 4, description: "以上皆可" },
    ],
  },
  {
    number: 15,
    description: "DNS 的封包格式其中標頭的長度是固定的,共佔幾個 bytes ___。",
    answer: 4,
    options: [
      { label: 1, description: "4" },
      { label: 2, description: "8" },
      { label: 3, description: "10" },
      { label: 4, description: "12" },
    ],
  },
  {
    number: 16,
    description: "當名稱伺服器錯誤時,其 rCode 的欄位值為 ___。",
    answer: 2,
    options: [
      { label: 1, description: "1" },
      { label: 2, description: "2" },
      { label: 3, description: "3" },
      { label: 4, description: "4" },
    ],
  },
  {
    number: 17,
    description: "Zone 檔案內的一開始就是何種記錄 ___。",
    answer: 4,
    options: [
      { label: 1, description: "PTR" },
      { label: 2, description: "NS" },
      { label: 3, description: "A" },
      { label: 4, description: "SOA" },
    ],
  },
  {
    number: 18,
    description: "哪一種 RR 可以對同一部主機設定不同的別名(alias) ___。",
    answer: 3,
    options: [
      { label: 1, description: "AAAA" },
      { label: 2, description: "MX" },
      { label: 3, description: "CNAME" },
      { label: 4, description: "NS" },
    ],
  },
  {
    number: 19,
    description: "DNS 是一種讓主機可以查詢此一分散式資料庫的 ___ 協定。",
    answer: 4,
    options: [
      { label: 1, description: "數據鏈路層" },
      { label: 2, description: "網路層" },
      { label: 3, description: "傳輸層" },
      { label: 4, description: "應用層" },
    ],
  },
  {
    number: 20,
    description: "DNS 協定是透過 UDP 來運作,使用埠號 ___。",
    answer: 4,
    options: [
      { label: 1, description: "25" },
      { label: 2, description: "32" },
      { label: 3, description: "48" },
      { label: 4, description: "53" },
    ],
  },
];

export default function App() {
  const [isSubmit, setIsSubmit] = useState(false);
  const handleSbumit = () => {
    setIsSubmit((prev) => !prev);
  };
  return (
    <div>
      {questions.map((question) => (
        <Card
          isSubmit={isSubmit}
          key={question.number}
          number={question.number}
          description={question.description}
          options={question.options}
          answer={question.answer}
        />
      ))}
      <button
        onClick={handleSbumit}
        type="button"
        className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        送出
      </button>
    </div>
  );
}
