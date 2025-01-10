import { BlockMath, InlineMath } from "react-katex";

export const chapter10Questions = [
  {
    number: 1,
    topic: "第十章 TCP/UDP協定",
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
    topic: "第十章 TCP/UDP協定",
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
    topic: "第十章 TCP/UDP協定",
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
    topic: "第十章 TCP/UDP協定",
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
    topic: "第十章 TCP/UDP協定",
    description: "TCP 進行雙方的同步溝通時,那一位元會被設定為 1。",
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
    topic: "第十章 TCP/UDP協定",
    description: "哪一種協定需要三方交握。",
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
    topic: "第十章 TCP/UDP協定",
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
    topic: "第十章 TCP/UDP協定",
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
    topic: "第十章 TCP/UDP協定",
    description:
      "某一方告訴對方自己 TCP 傳送資料已經結束,那一位元會被設定為 1。",
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
    topic: "第十章 TCP/UDP協定",
    description:
      "主機 A 在確定主機 B 正確地收到目前所傳送的封包之前,不會再傳送新的資料稱為 ______ 協定。",
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
    topic: "第十章 TCP/UDP協定",
    description:
      "TCP 允許傳送端只重送它接收端未正確收到(指遺失或損毀)的封包稱為 _______。",
    answer: 3,
    options: [
      { label: 1, description: "TCP Socket" },
      { label: 2, description: "GBN" },
      { label: 3, description: "SR" },
      { label: 4, description: "以上皆非" },
    ],
  },
  {
    number: 12,
    topic: "第十章 TCP/UDP協定",
    description:
      "_____ 傳輸的應用可以用任何它想要的速率來傳送資料,且想傳送多久就傳多久。",
    answer: 3,
    options: [
      { label: 1, description: "TCP" },
      { label: 2, description: "IP" },
      { label: 3, description: "UDP" },
      { label: 4, description: "以上皆非" },
    ],
  },
  {
    number: 13,
    topic: "第十章 TCP/UDP協定",
    description: "UDP Socket 是由 ____ 位址與目的端埠號來加以識別。",
    answer: 1,
    options: [
      { label: 1, description: "目的端 IP" },
      { label: 2, description: "來源端 IP" },
      { label: 3, description: "目的端 IP 與來源端 IP" },
      { label: 4, description: "以上皆可" },
    ],
  },
  {
    number: 14,
    topic: "第十章 TCP/UDP協定",
    description: "TCP Socket 是由 ____ 項數值來加以識別。",
    answer: 3,
    options: [
      { label: 1, description: "2" },
      { label: 2, description: "3" },
      { label: 3, description: "4" },
      { label: 4, description: "5" },
    ],
  },
  {
    number: 15,
    topic: "第十章 TCP/UDP協定",
    description:
      "TCP 允許傳送端可以無需等待確認就可以傳輸多份封包稱為 _______。",
    answer: 2,
    options: [
      { label: 1, description: "TCP Socket" },
      { label: 2, description: "滑動窗格協定(又稱 Go-Back-N)" },
      { label: 3, description: "Stop-and-Wait" },
      { label: 4, description: "以上皆非" },
    ],
  },
];

export const chapter11Questions = [
  {
    number: 1,
    topic: "第十一章 DNS協定",
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
    number: 2,
    topic: "第十一章 DNS協定",
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
    number: 3,
    topic: "第十一章 DNS協定",
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
    number: 4,
    topic: "第十一章 DNS協定",
    description: "哪一種 DNS 伺服器沒有管理任何的 Zone?",
    answer: 3,
    options: [
      { label: 1, description: "主要名稱 DNS 伺服器" },
      { label: 2, description: "次要名稱 DNS 伺服器" },
      { label: 3, description: "快取 DNS 伺服器" },
      { label: 4, description: "以上皆可" },
    ],
  },
  {
    number: 5,
    topic: "第十一章 DNS協定",
    description: "DNS 的封包格式其中標頭的長度是固定的,共佔幾個 bytes?",
    answer: 4,
    options: [
      { label: 1, description: "4" },
      { label: 2, description: "8" },
      { label: 3, description: "10" },
      { label: 4, description: "12" },
    ],
  },
  {
    number: 6,
    topic: "第十一章 DNS協定",
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
    number: 7,
    topic: "第十一章 DNS協定",
    description: "Zone 檔案內的一開始就是何種記錄?",
    answer: 4,
    options: [
      { label: 1, description: "PTR" },
      { label: 2, description: "NS" },
      { label: 3, description: "A" },
      { label: 4, description: "SOA" },
    ],
  },
  {
    number: 8,
    topic: "第十一章 DNS協定",
    description: "哪一種 RR 可以對同一部主機設定不同的別名 (alias)?",
    answer: 3,
    options: [
      { label: 1, description: "AAAA" },
      { label: 2, description: "MX" },
      { label: 3, description: "CNAME" },
      { label: 4, description: "NS" },
    ],
  },
  {
    number: 9,
    topic: "第十一章 DNS協定",
    description: "DNS 是一種讓主機可以查詢此一分散式資料庫的 ____ 協定。",
    answer: 4,
    options: [
      { label: 1, description: "數據鏈路層" },
      { label: 2, description: "網路層" },
      { label: 3, description: "傳輸層" },
      { label: 4, description: "應用層" },
    ],
  },
  {
    number: 10,
    topic: "第十一章 DNS協定",
    description: "DNS 協定是透過 UDP 來運作,使用埠號 ____。",
    answer: 4,
    options: [
      { label: 1, description: "25" },
      { label: 2, description: "32" },
      { label: 3, description: "48" },
      { label: 4, description: "53" },
    ],
  },
];

export const chapter14Questions = [
  {
    number: 1,
    topic: "第十四章 HTTP協定",
    description: "Web Browser 是透過何者向 WWW 伺服器擷取資訊?",
    answer: 3,
    options: [
      { label: 1, description: "IP" },
      { label: 2, description: "TCP" },
      { label: 3, description: "HTTP" },
      { label: 4, description: "PPP" },
    ],
  },
  {
    number: 2,
    topic: "第十四章 HTTP協定",
    description: "HTTP 協定屬於哪一層?",
    answer: 3,
    options: [
      { label: 1, description: "表現層" },
      { label: 2, description: "交談層" },
      { label: 3, description: "應用層" },
      { label: 4, description: "傳輸層" },
    ],
  },
  {
    number: 3,
    topic: "第十四章 HTTP協定",
    description: "一個物件指的就是幾個檔案?",
    answer: 1,
    options: [
      { label: 1, description: "1" },
      { label: 2, description: "2" },
      { label: 3, description: "3" },
      { label: 4, description: "4" },
    ],
  },
  {
    number: 4,
    topic: "第十四章 HTTP協定",
    description: "GET 指令屬於哪一個方法?",
    answer: 2,
    options: [
      { label: 1, description: "標頭列" },
      { label: 2, description: "要求列" },
      { label: 3, description: "狀態列" },
      { label: 4, description: "回覆列" },
    ],
  },
  {
    number: 5,
    topic: "第十四章 HTTP協定",
    description: "200 OK 代表什麼類型的代碼?",
    answer: 1,
    options: [
      { label: 1, description: "狀態碼" },
      { label: 2, description: "要求碼" },
      { label: 3, description: "標頭碼" },
      { label: 4, description: "回覆碼" },
    ],
  },
  {
    number: 6,
    topic: "第十四章 HTTP協定",
    description: "HTTP 協定的屬性是什麼?",
    answer: 1,
    options: [
      { label: 1, description: "無態(stateless)協定" },
      { label: 2, description: "狀態(state)協定" },
      { label: 3, description: "無態+狀態協定" },
      { label: 4, description: "以上皆可" },
    ],
  },
  {
    number: 7,
    topic: "第十四章 HTTP協定",
    description: "FTP 協定的屬性是什麼?",
    answer: 2,
    options: [
      { label: 1, description: "無態(stateless)協定" },
      { label: 2, description: "狀態(state)協定" },
      { label: 3, description: "無態+狀態協定" },
      { label: 4, description: "以上皆可" },
    ],
  },
  {
    number: 8,
    topic: "第十四章 HTTP協定",
    description: "HTTPS 是 HTTP 和什麼的組合?",
    answer: 4,
    options: [
      { label: 1, description: "SSH" },
      { label: 2, description: "TCP" },
      { label: 3, description: "UDP" },
      { label: 4, description: "SSL/TLS" },
    ],
  },
  {
    number: 9,
    topic: "第十四章 HTTP協定",
    description: "SSL/TLS 預定的 port 號碼為?",
    answer: 3,
    options: [
      { label: 1, description: "301" },
      { label: 2, description: "304" },
      { label: 3, description: "443" },
      { label: 4, description: "501" },
    ],
  },
  {
    number: 10,
    topic: "第十四章 HTTP協定",
    description: "為了讓網站辨識使用者身份,需要使用什麼功能?",
    answer: 3,
    options: [
      { label: 1, description: "GET" },
      { label: 2, description: "POST" },
      { label: 3, description: "Cookie" },
      { label: 4, description: "HEAD" },
    ],
  },
  {
    number: 11,
    topic: "第十四章 HTTP協定",
    description: "HTTP/2 與 HTTP/1.1 比較,前者具有什麼優點?",
    answer: 4,
    options: [
      { label: 1, description: "對 HOL blocking 問題有所修正" },
      { label: 2, description: "單一條的 TCP 連線來一次傳送多個資料流" },
      { label: 3, description: "更高的速度" },
      { label: 4, description: "以上皆是" },
    ],
  },
  {
    number: 12,
    topic: "第十四章 HTTP協定",
    description: "一封包從客戶端至伺服器再回到客戶端,所花掉的時間為?",
    answer: 2,
    options: [
      { label: 1, description: "1 RTT" },
      { label: 2, description: "2 RTT" },
      { label: 3, description: "3 RTT" },
      { label: 4, description: "4 RTT" },
    ],
  },
  {
    number: 13,
    topic: "第十四章 HTTP協定",
    description: "HTTPS 可看成 HTTP 工作在什麼樣的連線上的協定?",
    answer: 3,
    options: [
      { label: 1, description: "點對點" },
      { label: 2, description: "不加密" },
      { label: 3, description: "加密" },
      { label: 4, description: "以上皆非" },
    ],
  },
  {
    number: 14,
    topic: "第十四章 HTTP協定",
    description: "想了解 HTTP over TLS,可參考 RFC?",
    answer: 4,
    options: [
      { label: 1, description: "2573" },
      { label: 2, description: "2475" },
      { label: 3, description: "2616" },
      { label: 4, description: "2818" },
    ],
  },
  {
    number: 15,
    topic: "第十四章 HTTP協定",
    description: "SSL 是位於什麼層之間的協定?",
    answer: 2,
    options: [
      { label: 1, description: "網路層之上,傳輸層之下" },
      { label: 2, description: "傳輸層之上,應用層之下" },
      { label: 3, description: "數據鏈路層之上,網路層之下" },
      { label: 4, description: "以上皆非" },
    ],
  },
  {
    number: 16,
    topic: "第十四章 HTTP協定",
    description: "下列哪一個稱為超文件傳輸協定?",
    answer: 4,
    options: [
      { label: 1, description: "PPP" },
      { label: 2, description: "FTP" },
      { label: 3, description: "TCP" },
      { label: 4, description: "HTTP" },
    ],
  },
  {
    number: 17,
    topic: "第十四章 HTTP協定",
    description: "HTTP 協定可由哪個埠號識別出來?",
    answer: 3,
    options: [
      { label: 1, description: "25" },
      { label: 2, description: "53" },
      { label: 3, description: "80" },
      { label: 4, description: "110" },
    ],
  },
  {
    number: 18,
    topic: "第十四章 HTTP協定",
    description: "HTTP/1.1 其下層使用哪種協定?",
    answer: 3,
    options: [
      { label: 1, description: "LCP" },
      { label: 2, description: "PPP" },
      { label: 3, description: "TCP" },
      { label: 4, description: "UDP" },
    ],
  },
  {
    number: 19,
    topic: "第十四章 HTTP協定",
    description: "HTTP 客戶端與 HTTP 伺服器之間實際的溝通時,使用什麼工具?",
    answer: 4,
    options: [
      { label: 1, description: "GET" },
      { label: 2, description: "POST" },
      { label: 3, description: "HEAD" },
      { label: 4, description: "Telnet 程式" },
    ],
  },
];

export const chapter15Questions = [
  {
    number: 1,
    topic: "第十五章 SMTP協定與POP3協定",
    description: "小英想送郵件給大明,可使用 ___ 協定傳送出去。",
    answer: 4,
    options: [
      { label: 1, description: "BOOTP" },
      { label: 2, description: "NAT" },
      { label: 3, description: "DCHP" },
      { label: 4, description: "SMTP" },
    ],
  },
  {
    number: 2,
    topic: "第十五章 SMTP協定與POP3協定",
    description: "大明想從郵件伺服器內部之郵箱取出該郵件可使用 ___ 協定。",
    answer: 3,
    options: [
      { label: 1, description: "SMTP" },
      { label: 2, description: "NAT" },
      { label: 3, description: "POP3" },
      { label: 4, description: "DHCP" },
    ],
  },
  {
    number: 3,
    topic: "第十五章 SMTP協定與POP3協定",
    description: "SMTP 為應用層協定並使用 ___ 的傳輸服務。",
    answer: 2,
    options: [
      { label: 1, description: "IP" },
      { label: 2, description: "TCP" },
      { label: 3, description: "UDP" },
      { label: 4, description: "DHCP" },
    ],
  },
  {
    number: 4,
    topic: "第十五章 SMTP協定與POP3協定",
    description: "SMTP 採用 ___ 方式和 ___ 連接。",
    answer: 1,
    options: [
      { label: 1, description: "內頻方式和持續性連接" },
      { label: 2, description: "外頻方式和持續性連接" },
      { label: 3, description: "外頻方式和非持續性連接" },
      { label: 4, description: "內頻方式和非持續性連接" },
    ],
  },
  {
    number: 5,
    topic: "第十五章 SMTP協定與POP3協定",
    description: "IMAP 或 POP3 執行 ___ 動作。",
    answer: 4,
    options: [
      { label: 1, description: "push" },
      { label: 2, description: "upload" },
      { label: 3, description: "download" },
      { label: 4, description: "pull" },
    ],
  },
  {
    number: 6,
    topic: "第十五章 SMTP協定與POP3協定",
    description: "SMTP 執行 ___ 動作。",
    answer: 1,
    options: [
      { label: 1, description: "push" },
      { label: 2, description: "upload" },
      { label: 3, description: "download" },
      { label: 4, description: "pull" },
    ],
  },
  {
    number: 7,
    topic: "第十五章 SMTP協定與POP3協定",
    description:
      "一旦小英寫好郵件,透過郵件讀取器將郵件轉交給___用戶端,透過網際網路,MTA 伺服端把郵件送出。",
    answer: 2,
    options: [
      { label: 1, description: "UA" },
      { label: 2, description: "MTA" },
      { label: 3, description: "DCHP" },
      { label: 4, description: "SMTP" },
    ],
  },
  {
    number: 8,
    topic: "第十五章 SMTP協定與POP3協定",
    description: "UA 代表什麼?",
    answer: 1,
    options: [
      { label: 1, description: "執行使用者代理器" },
      { label: 2, description: "郵件伺服器" },
      { label: 3, description: "郵箱" },
      { label: 4, description: "以上皆非" },
    ],
  },
  {
    number: 9,
    topic: "第十五章 SMTP協定與POP3協定",
    description: "用戶端和伺服端需要一對的郵件存取代理程式,稱為 ___。",
    answer: 3,
    options: [
      { label: 1, description: "UA" },
      { label: 2, description: "MTA" },
      { label: 3, description: "MAA" },
      { label: 4, description: "以上皆非" },
    ],
  },
  {
    number: 10,
    topic: "第十五章 SMTP協定與POP3協定",
    description:
      "當您想透過網頁瀏覽器來送收電子郵件(如 Hotmail),則用戶代理器至郵件伺服器之間是採用何種協定?",
    answer: 2,
    options: [
      { label: 1, description: "BOOTP" },
      { label: 2, description: "HTTP" },
      { label: 3, description: "TCP" },
      { label: 4, description: "SMTP" },
    ],
  },
];

export const linearAlgebraQuestion = [
  {
    number: 1,
    topic: "如下所示",
    description: (
      <>
        求下列矩陣的行列式:
        <BlockMath>{`\\begin{bmatrix} 0 & -3 \\\\ 1 & 2 \\end{bmatrix}`}</BlockMath>
      </>
    ),
    answer: "b",
    options: [
      { label: "a", description: <InlineMath>{`-3`}</InlineMath> },
      { label: "b", description: <InlineMath>{`3`}</InlineMath> },
      { label: "c", description: <InlineMath>{`6`}</InlineMath> },
      { label: "d", description: <InlineMath>{`-6`}</InlineMath> },
    ],
  },
  {
    number: 2,
    topic: "如下所示",
    description: (
      <>
        求下列矩陣的行列式:
        <BlockMath>{`\\begin{bmatrix} 2 & 1 & 2 \\\\ 1 & -1 & 0 \\\\ 0 & 3 & -2 \\end{bmatrix}`}</BlockMath>
      </>
    ),
    answer: "c",
    options: [
      { label: "a", description: <InlineMath>{`10`}</InlineMath> },
      { label: "b", description: <InlineMath>{`8`}</InlineMath> },
      { label: "c", description: <InlineMath>{`12`}</InlineMath> },
      { label: "d", description: <InlineMath>{`13`}</InlineMath> },
    ],
  },
  {
    number: 3,
    topic: "如下所示",
    description: (
      <>
        求下列矩陣的行列式:
        <BlockMath>{`\\begin{bmatrix} -15 & 0 & 4 \\\\ 3 & 0 & -5 \\\\ 12 & 0 & 6 \\end{bmatrix}`}</BlockMath>
      </>
    ),
    answer: "a",
    options: [
      { label: "a", description: <InlineMath>{`0`}</InlineMath> },
      { label: "b", description: <InlineMath>{`-1`}</InlineMath> },
      { label: "c", description: <InlineMath>{`15`}</InlineMath> },
      { label: "d", description: <InlineMath>{`30`}</InlineMath> },
    ],
  },
  {
    number: 4,
    topic: "如下所示",
    description: (
      <>
        求下列矩陣的行列式:
        <BlockMath>{`\\begin{bmatrix} -5 & 0 & 3 \\\\ 3 & 1 & -6 \\\\ 2 & -3 & 6 \\end{bmatrix}`}</BlockMath>
      </>
    ),
    answer: "d",
    options: [
      { label: "a", description: <InlineMath>{`87`}</InlineMath> },
      { label: "b", description: <InlineMath>{`-141`}</InlineMath> },
      { label: "c", description: <InlineMath>{`-63`}</InlineMath> },
      { label: "d", description: <InlineMath>{`27`}</InlineMath> },
    ],
  },
  {
    number: 5,
    topic: "如下所示",
    description: (
      <>
        求下列矩陣的行列式:
        <BlockMath>{`\\begin{bmatrix} 2 & 0 & 0 & 0 \\\\ -3 & 1 & 0 & 0 \\\\ 4 & 1 & 3 & 0 \\\\ 5 & 2 & 1 & -1 \\end{bmatrix}`}</BlockMath>
      </>
    ),
    answer: "b",
    options: [
      { label: "a", description: <InlineMath>{`10`}</InlineMath> },
      { label: "b", description: <InlineMath>{`-6`}</InlineMath> },
      { label: "c", description: <InlineMath>{`6`}</InlineMath> },
      { label: "d", description: <InlineMath>{`-12`}</InlineMath> },
    ],
  },
  {
    number: 6,
    topic: "如下所示",
    description: (
      <>
        令 A 和 B 為方形矩陣，若 B = r<sub>ij</sub>(A)，則 det(B) =
        -det(A)，判斷:
      </>
    ),
    answer: "a",
    options: [
      { label: "a", description: "是" },
      { label: "b", description: "否" },
    ],
  },
  {
    number: 7,
    topic: "如下所示",
    description: (
      <>
        令 A 和 B 為方形矩陣，若 B = r<sup>(k)</sup>
        <sub>i</sub>(A)，則 det(B) = k det(A)。
      </>
    ),
    answer: "a",
    options: [
      { label: "a", description: "是" },
      { label: "b", description: "否" },
    ],
  },
  {
    number: 8,
    topic: "如下所示",
    description: (
      <>
        令 A 和 B 為方形矩陣，若 B = r<sub>ij</sub>
        <sup>(k)</sup>(A)，則 det(B) = det(A) 是否正確？
      </>
    ),
    answer: "a",
    options: [
      { label: "a", description: "是" },
      { label: "b", description: "否" },
    ],
  },
  {
    number: 9,
    topic: "如下所示",
    description: (
      <>令 A 和 B 為方形矩陣，請問 det(AB) = det(A) det(B) 是否正確？</>
    ),
    answer: "a",
    options: [
      { label: "a", description: "是" },
      { label: "b", description: "否" },
    ],
  },
  {
    number: 10,
    topic: "如下所示",
    description: (
      <>令 A 和 B 為方形矩陣，請問 det(A + B) = det(A) + det(B) 是否正確？</>
    ),
    answer: "b",
    options: [
      { label: "a", description: "是" },
      { label: "b", description: "否" },
    ],
  },
  {
    number: 11,
    topic: "如下所示",
    description: (
      <>
        若 A 為一方陣，則 det(A<sup>-1</sup>) = 1 / det(A) 是否正確？
      </>
    ),
    answer: "a",
    options: [
      { label: "a", description: "是" },
      { label: "b", description: "否" },
    ],
  },
  {
    number: 12,
    topic: "如下所示",
    description: (
      <>
        若 A 為一方陣，則 det(A<sup>T</sup>) = det(A) 是否正確？
      </>
    ),
    answer: "a",
    options: [
      { label: "a", description: "是" },
      { label: "b", description: "否" },
    ],
  },
  {
    number: 13,
    topic: "如下所示",
    description: (
      <>
        令 A 和 B 為方形矩陣。若 A 為 3x3 方陣，則 det(5A) = 5det(A) 是否正確？
      </>
    ),
    answer: "b",
    options: [
      { label: "a", description: "是" },
      { label: "b", description: "否" },
    ],
  },
  {
    number: 14,
    topic: "如下所示",
    description: (
      <>
        已知矩陣 A =
        <BlockMath>{`\\begin{bmatrix} 7 & -3 \\\\ 2 & -1 \\end{bmatrix}`}</BlockMath>
        ，求 A<sup>-1</sup>：
      </>
    ),
    answer: "d",
    options: [
      {
        label: "a",
        description: (
          <>
            <BlockMath>{`\\begin{bmatrix} 0 & -3 \\\\ 1 & 2 \\end{bmatrix}`}</BlockMath>
          </>
        ),
      },
      {
        label: "b",
        description: (
          <>
            <BlockMath>{`\\begin{bmatrix} -1 & 2 \\\\ -3 & 7 \\end{bmatrix}`}</BlockMath>
          </>
        ),
      },
      {
        label: "c",
        description: (
          <>
            <BlockMath>{`\\begin{bmatrix} -1 & -3 \\\\ 2 & -7 \\end{bmatrix}`}</BlockMath>
          </>
        ),
      },
      {
        label: "d",
        description: "以上皆非",
      },
    ],
  },
  {
    number: 15,
    topic: "如下所示",
    description: (
      <>
        已知矩陣 A =
        <BlockMath>{`\\begin{bmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\\\ 7 & 8 & 9 \\end{bmatrix}`}</BlockMath>
        ，求 A<sup>-1</sup>：
      </>
    ),
    answer: "d",
    options: [
      {
        label: "a",
        description: (
          <>
            <BlockMath>{`\\begin{bmatrix} -1 & 4 & 7 \\\\ -2 & 5 & 8 \\\\ -3 & 6 & 9 \\end{bmatrix}`}</BlockMath>
          </>
        ),
      },
      {
        label: "b",
        description: (
          <>
            <BlockMath>{`\\begin{bmatrix} 1 & -4 & -7 \\\\ -2 &  5 & -8 \\\\ -3 & -6 & 9 \\end{bmatrix}`}</BlockMath>
          </>
        ),
      },
      {
        label: "c",
        description: (
          <>
            <BlockMath>{`\\begin{bmatrix} 1 & 4 & 7 \\\\ 2 & 5 & 8 \\\\ 3 & 6 & 9 \\end{bmatrix}`}</BlockMath>
          </>
        ),
      },
      {
        label: "d",
        description: "以上皆非",
      },
    ],
  },
];

export const linearAlgebraQuestionAll = [
  {
    number: 1,
    topic: "如下所示",
    description: (
      <>
        求下列矩陣的行列式:
        <BlockMath>{`\\begin{bmatrix} 2 & 1 & 2 \\\\ 1 & -1 & 0 \\\\ 0 & 3 & -2 \\end{bmatrix}`}</BlockMath>
      </>
    ),
    answer: "c",
    options: [
      { label: "a", description: <InlineMath>{`10`}</InlineMath> },
      { label: "b", description: <InlineMath>{`8`}</InlineMath> },
      { label: "c", description: <InlineMath>{`12`}</InlineMath> },
      { label: "d", description: <InlineMath>{`13`}</InlineMath> },
    ],
  },
  {
    number: 2,
    topic: "線性代數基底問題",
    description:
      "若 V 是一個向量空間，集合 S 是 V 的基底，則以下哪一項是正確的？",
    answer: "c",
    options: [
      { label: "a", description: "S 必須包含零向量" },
      { label: "b", description: "S 中的向量必須線性相關" },
      { label: "c", description: "S 必須生成 V，且線性獨立" },
      { label: "d", description: "S 中的向量個數必須大於 dim(V)" },
    ],
  },
  {
    number: 3,
    topic: "矩陣的零空間",
    description: "矩陣的零空間是什麼？",
    answer: "b",
    options: [
      { label: "a", description: "矩陣列空間的正交補空間" },
      { label: "b", description: "矩陣 Ax = 0 的所有解的集合" },
      { label: "c", description: "矩陣行空間的基底" },
      { label: "d", description: "矩陣的非零行向量" },
    ],
  },
  {
    number: 4,
    topic: "向量空間基底",
    description: "向量空間 {0} 的基底是什麼？",
    answer: "b",
    options: [
      { label: "a", description: "{0}" },
      { label: "b", description: "空集合" },
      { label: "c", description: "{1}" },
      { label: "d", description: "以上皆非" },
    ],
  },
  {
    number: 5,
    topic: "矩陣的秩",
    description: `矩陣 ${"A<sup>T</sup>"} 的秩與矩陣 A 的秩有什麼關係？（note: 選項中的 AT 為 ${"A<sup>T</sup>"}）`,
    answer: "b",
    options: [
      { label: "a", description: "rank(${ 'A<sup>T</sup>' }) ≠ rank(A)" },
      { label: "b", description: "rank(${ 'A<sup>T</sup>' }) = rank(A)" },
      { label: "c", description: "rank(${ 'A<sup>T</sup>' }) > rank(A)" },
      { label: "d", description: "rank(${ 'A<sup>T</sup>' }) < rank(A)" },
    ],
  },
  {
    number: 6,
    topic: "標準基底",
    description: "ℝ³ 的標準基底是什麼？",
    answer: "b",
    options: [
      { label: "a", description: "{(1, 1, 1), (0, 0, 1), (1, 0, 0)}" },
      { label: "b", description: "{(1, 0, 0), (0, 1, 0), (0, 0, 1)}" },
      { label: "c", description: "{(1, 0), (0, 1)}" },
      { label: "d", description: "{(1, 1, 0), (0, 1, 1), (1, 0, 1)}" },
    ],
  },
  {
    number: 7,
    topic: "矩陣空間的維度",
    description:
      "若一個矩陣空間 M<sub>2×2</sub> 的基底包含所有單位矩陣 E<sub>ij</sub>，則該空間的維度是多少？",
    answer: "b",
    options: [
      { label: "a", description: "2" },
      { label: "b", description: "4" },
      { label: "c", description: "6" },
      { label: "d", description: "8" },
    ],
  },
  {
    number: 8,
    topic: "矩陣的秩",
    description:
      "如果矩陣 A 的列空間基底為 \\{v₁, v₂, v₃\\}，那麼矩陣的秩為多少？",
    answer: "c",
    options: [
      { label: "a", description: "1" },
      { label: "b", description: "2" },
      { label: "c", description: "3" },
      { label: "d", description: "無法確定" },
    ],
  },
  {
    number: 9,
    topic: "核次數 (nullity)",
    description: "核次數 nullity(T) 是什麼？",
    answer: "a",
    options: [
      { label: "a", description: "核空間的維度" },
      { label: "b", description: "值域的維度" },
      { label: "c", description: "向量空間的總維度" },
      { label: "d", description: "矩陣的秩" },
    ],
  },
  {
    number: 10,
    topic: "矩陣的秩 (Rank)",
    description: "如果矩陣 A 是 m × n 的矩陣，其秩為 r，則以下哪一項正確？",
    answer: "a",
    options: [
      { label: "a", description: "r ≤ m 且 r ≤ n" },
      { label: "b", description: "r > m 且 r > n" },
      { label: "c", description: "r = m + n" },
      { label: "d", description: "r = m - n" },
    ],
  },
  {
    number: 11,
    topic: "線性轉換的性質",
    description:
      "如果線性轉換 T: ℝⁿ → ℝᵐ 的核空間只有零向量，則 T 是什麼性質？",
    answer: "c",
    options: [
      { label: "a", description: "對應零矩陣" },
      { label: "b", description: "非線性轉換" },
      { label: "c", description: "一對一" },
      { label: "d", description: "零空間" },
    ],
  },
  {
    number: 12,
    topic: "零空間的維度",
    description: "如果矩陣 A 是 m × n 的矩陣，其秩為 r，那麼零空間的維度為？",
    answer: "b",
    options: [
      { label: "a", description: "m - r" },
      { label: "b", description: "n - r" },
      { label: "c", description: "r" },
      { label: "d", description: "m + n - r" },
    ],
  },
  {
    number: 13,
    topic: "矩陣的列空間基底",
    description: "矩陣的列空間基底可以通過什麼方法獲得？",
    answer: "a",
    options: [
      {
        label: "a",
        description: "使用高斯消去法將矩陣化為列梯形形式，取非零列向量",
      },
      { label: "b", description: "使用逆矩陣的行向量" },
      { label: "c", description: "解 Ax = 0" },
      { label: "d", description: "選取所有零行向量" },
    ],
  },
  {
    number: 14,
    topic: "值域的維度",
    description:
      "若矩陣 A 表示線性轉換 T，且 rank(A) = 3，則 T 的值域的維度是多少？",
    answer: "a",
    options: [
      { label: "a", description: "3" },
      { label: "b", description: "4" },
      { label: "c", description: "5" },
      { label: "d", description: "無法確定" },
    ],
  },
  {
    number: 15,
    topic: "線性系統的秩",
    description:
      "對於一個 n × n 的線性系統 Ax = b，若行列式 det(A) ≠ 0，則系統的秩與 n 的關係為？",
    answer: "a",
    options: [
      { label: "a", description: "秩等於 n" },
      { label: "b", description: "秩小於 n" },
      { label: "c", description: "秩等於零" },
      { label: "d", description: "無法確定" },
    ],
  },
  {
    number: 16,
    topic: "線性轉換的表示方式",
    description: "線性轉換 T: ℝⁿ → ℝᵐ 通常由什麼表示？",
    answer: "b",
    options: [
      { label: "a", description: "一個行列式" },
      { label: "b", description: "一個矩陣" },
      { label: "c", description: "一個多項式" },
      { label: "d", description: "一個函數圖形" },
    ],
  },
  {
    number: 17,
    topic: "線性轉換的條件",
    description: "線性轉換 T 滿足以下哪兩個條件？",
    answer: "a",
    options: [
      { label: "a", description: "T(u + v) = T(u) + T(v) 與 T(cv) = cT(v)" },
      { label: "b", description: "T(u · v) = T(u) · T(v) 與 T(c) = cT" },
      { label: "c", description: "T(u) = u + T 與 T(v) = v + T" },
      { label: "d", description: "T(u) × T(v) = T(u × v)" },
    ],
  },
  {
    number: 18,
    topic: "行列式性質",
    description:
      "令 A 和 B 為方形矩陣，若 B = r<sub>ij</sub>(A)，則 det(B) = -det(A)",
    answer: "a",
    options: [
      { label: "a", description: "是" },
      { label: "b", description: "否" },
    ],
  },
  {
    number: 19,
    topic: "行列式性質",
    description:
      "令 A 和 B 為方形矩陣，請問 det(AB) = det(A) det(B) 是否正確？",
    answer: "a",
    options: [
      { label: "a", description: "是" },
      { label: "b", description: "否" },
    ],
  },
  {
    number: 20,
    topic: "線性轉換的秩與核次數",
    description: "若 T: ℝ⁵ → ℝ³，且 rank(T) = 3，則 nullity(T) 為多少？",
    answer: "a",
    options: [
      { label: "a", description: "2" },
      { label: "b", description: "3" },
      { label: "c", description: "5" },
      { label: "d", description: "無法確定" },
    ],
  },
  {
    number: 21,
    topic: "線性轉換運算",
    description:
      "若線性轉換 T: ℝ³ → ℝ³ 滿足 T(1, 0, 0) = (2, 1, 0)，則 T(2, 0, 0) 為何？",
    answer: "a",
    options: [
      { label: "a", description: "(4, 2, 0)" },
      { label: "b", description: "(3, 1, 0)" },
      { label: "c", description: "(2, 0, 0)" },
      { label: "d", description: "無法確定" },
    ],
  },
  {
    number: 22,
    topic: "子空間的基底",
    description:
      "如果 W 是 ℝ³ 的一個子空間，且 dim(W) = 2，以下哪一項可能是 W 的基底？",
    answer: "b",
    options: [
      { label: "a", description: "{(1, 0, 0), (0, 1, 0), (0, 0, 1)}" },
      { label: "b", description: "{(1, 0, 0), (0, 1, 0)}" },
      { label: "c", description: "{(1, 0, 0), (0, 1, 0), (1, 1, 1)}" },
      { label: "d", description: "{(1, 0, 0)}" },
    ],
  },
  {
    number: 23,
    topic: "向量空間的維度",
    description: "若一個向量空間的基底有 5 個向量，則該向量空間的維度為多少？",
    answer: "c",
    options: [
      { label: "a", description: "3" },
      { label: "b", description: "4" },
      { label: "c", description: "5" },
      { label: "d", description: "6" },
    ],
  },
  {
    number: 24,
    topic: "線性方程組的解",
    description:
      "對於一個 n × n 的方陣 A，若行列式 det(A) ≠ 0，則以下哪一項正確？",
    answer: "b",
    options: [
      { label: "a", description: "系統 Ax = b 無解" },
      { label: "b", description: "系統 Ax = b 有唯一解" },
      { label: "c", description: "系統 Ax = b 有無限多組解" },
      { label: "d", description: "無法判斷" },
    ],
  },
  {
    number: 25,
    topic: "線性方程組的解",
    description:
      "若行列式 det(A) = 0，且增廣矩陣的秩等於係數矩陣的秩，則線性系統的解為？",
    answer: "c",
    options: [
      { label: "a", description: "無解" },
      { label: "b", description: "唯一解" },
      { label: "c", description: "無限多組解" },
      { label: "d", description: "無法確定" },
    ],
  },
  {
    number: 26,
    topic: "線性轉換的判斷",
    description: "T(x) = x² 是否為線性轉換？",
    answer: "d",
    options: [
      { label: "a", description: "是" },
      { label: "b", description: "否，因為不滿足向量加法的封閉性" },
      { label: "c", description: "否，因為不滿足純量乘法的封閉性" },
      { label: "d", description: "否，因為不滿足線性轉換的兩個條件" },
    ],
  },
  {
    number: 27,
    topic: "向量空間的基底性質",
    description: "如果一個向量空間的基底有 n 個向量，以下哪一項正確？",
    answer: "d",
    options: [
      { label: "a", description: "所有生成該空間的集合都至少有 n 個向量" },
      { label: "b", description: "所有線性獨立的集合都至多有 n 個向量" },
      { label: "c", description: "所有基底都有 n 個向量" },
      { label: "d", description: "以上皆是" },
    ],
  },
  {
    number: 28,
    topic: "矩陣的列空間",
    description: "矩陣的列空間是由什麼所生成的？",
    answer: "b",
    options: [
      { label: "a", description: "矩陣的行向量" },
      { label: "b", description: "矩陣的列向量" },
      { label: "c", description: "矩陣的零空間" },
      { label: "d", description: "矩陣的秩" },
    ],
  },
  {
    number: 29,
    topic: "矩陣的秩",
    description: "矩陣的秩是指什麼？",
    answer: "c",
    options: [
      { label: "a", description: "矩陣行空間的維度" },
      { label: "b", description: "矩陣列空間的維度" },
      { label: "c", description: "矩陣行空間與列空間的維度（相等）" },
      { label: "d", description: "矩陣零空間的維度" },
    ],
  },
  {
    number: 30,
    topic: "標準基底",
    description: "以下哪一項是 ℝⁿ 的標準基底的通式？",
    answer: "a",
    options: [
      {
        label: "a",
        description: "{(1, 0, ..., 0), (0, 1, ..., 0), ..., (0, 0, ..., 1)}",
      },
      { label: "b", description: "{(1, 1, ..., 1)}" },
      { label: "c", description: "{(0, 0, ..., 0)}" },
      { label: "d", description: "{(1, 1, ..., 0), (0, 1, ..., 1)}" },
    ],
  },
  {
    number: 31,
    topic: "線性方程組的解",
    description:
      "若行列式 det(A) = 0，且增廣矩陣的秩大於係數矩陣的秩，則系統 Ax = b 的解為？",
    answer: "a",
    options: [
      { label: "a", description: "無解" },
      { label: "b", description: "唯一解" },
      { label: "c", description: "無限多組解" },
      { label: "d", description: "無法確定" },
    ],
  },
  {
    number: 32,
    topic: "行列式性質",
    description:
      "令 A 和 B 為方形矩陣，若 B = r<sub>ij</sub><sup>(k)</sup>(A)，則 det(B) = det(A) 是否正確？",
    answer: "b",
    options: [
      { label: "a", description: "是" },
      { label: "b", description: "否" },
    ],
  },
];
