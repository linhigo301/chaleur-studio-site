# 首頁 Spacing / Alignment / Visual Hierarchy 交付

2026-09-14。以已部署 WEB-004 首頁為基礎，僅精修間距、對齊與元件內部資訊層級。共用 Typography System、Font Stack、Hero／Approach 文案、產品內容與品牌主色未改。

## 1–4：Section 節奏

Hero 主內容 padding 沿用原值：Desktop 96px / 80px，Tablet（≤1000px）72px / 64px，Mobile 52px / 52px。Hero footer 維持上下 18px、原淡色分隔線，文字垂直置中。

| 項目 | Desktop >1100px | Tablet 701–1100px | Mobile ≤700px |
| --- | --- | --- | --- |
| 1. Hero footer 下緣 → Products eyebrow 列 | 73px（72px padding + 1px border） | 65px | 49px |
| 2. Products 上 / 下 padding | 72 / 88px | 64 / 72px | 48 / 56px |
| 3. Approach 上 / 下 padding | 72 / 72px | 64 / 64px | 48 / 48px |
| 4. Contact 上 / 下 padding | 64 / 64px | 56 / 56px | 40 / 40px |
| Footer 上 / 下 padding | 22 / 22px | 22 / 22px | 20 / 20px |

Products 上方原為 90px，桌面縮為 72px（20%），讓 Hero footer 能自然接續產品區。頁面用 Products 較寬、Approach 中等、Contact 收緊、Footer 緊湊的節奏。手機段落交界的兩侧 padding 合計 Products → Approach 104px、Approach → Contact 88px，避免每一區各用過大的空白。

## 5–7：卡片與 Placeholder 幾何

5. Product Grid：桌面／平板 `gap: clamp(24px, 2.2vw, 32px)`；1920 為 32px、1440 為 31.68px、1366 約 30.05px、1024／820／768 為 24px。手機單欄 gap 36px。內容最大 1184px，與原 container 相同，不隨超寬螢幕無限伸展。
6. Card content padding：桌面 `32px 30px 28px`，平板 `30px 24px 26px`，手機 `28px 24px 24px`。圖片下緣到 metadata 因此為 32／30／28px；Metadata → Title 20px；Title → Body 16px；Body → Action 分隔線最小 24px，分隔線到 action 文字區另有 12px 內距。雙欄時 action 仍靠底對齊，較短文案卡會保留必要餘白。
7. Placeholder：沿用桌面／平板高 248px，手機減至 220px；沒有新增固定 aspect-ratio，寬度随卡片變動。兩張圖框同尺寸、原 padding 24px、原方角與淡線框。名稱與 Coming Soon 包在同一 `.placeholder-copy` 中，整組垂直／水平置中，名稱到副標 gap 32px；不再以每一段各自預留空行冒充置中。英文產品名需兩行時，整組仍居中。

## 8–13：元件資訊層級

8. Placeholder 背景維持 **#F2ECDF**，外卡 **#FFFDF8**，柔和區隔；不新增陰影、幾何、圖像或漸層。
9. Placeholder Product Name：`clamp(26px, 2vw, 30px)`；1920 30px、1440 28.8px、1366 27.32px、Tablet／Mobile 26px；維持近黑 **#24231F**、Sans、weight 500。卡片本身的產品 H3 沿用既有 30／28／26px 層級。
10. Coming Soon：**13px、#62615C**，weight 400、line-height 1.5，保留低調字距，與產品名稱明確分級；未降低到 12px。
11. Selected tools：**14px、weight 500、#46574D**；移至 OUR PRODUCTS 同一個 kicker 列，左右端對齊。兩者桌面／平板同一垂直位置，手機差異不超過 1px；手機保留 Selected tools，不撞主標。
12. Hero footer slogan：桌面／平板 **14px**，手機 **13px**，顏色使用既有較深 muted #46574D，仍低於正文權重，沿用字距。線條保持原 #D8DDD2，不新增裝飾。
13. EMBERLITE 狀態改以 **「· 資料準備中」／「· Details to follow」** 呈現，無 SaaS 膠囊或暖橘 badge；Local-first 維持產品屬性。1100px 以下 metadata 轉上下排列以避免長英文分類擠壓；桌面左右維持 baseline 對齊。

Products H2 → 副標：桌面／平板 20px、手機 16px；副標 → Cards：桌面 44px、平板 40px、手機 36px。以大段落、中標題組、小卡片內容建立不同節奏。

## 14–18：實測觀察

14. **Desktop**：1920×1080、1440×900、1366×768。Hero 與 Products 仍有呼吸感，但轉場較連續。Selected tools 與左側 eyebrow 形成完整一列，沒有漂在 H2 旁；兩張卡片等高，產品名稱與狀態不再同等醒目。
15. **Tablet**：1024×900、820×1180、768×1024。維持兩欄，metadata 分列後不擠壓；Placeholder 不扁，英文名稱自然兩行。Selected tools 與 eyebrow 保持同列，無碰撞；Section 留白較桌面收斂。
16. **Mobile**：390×844、375×812。卡片單欄間距 36px，Placeholder 高 220px，名稱 26px；不出現過高圖框或大量無意義空白。整組文字居中，主副層級明確，兩卡呈同系列。手機 Products → Approach → Contact 連續但有區分。
17. **雙語與瀏覽器**：Windows Chrome、Edge × 8 尺寸 × zh-TW／en-GB = 32 組首頁檢查通過，均保存並抽樣檢視完整截圖。確認無橫向溢出／JavaScript 例外、兩圖框同尺寸（容許子像素捨入）、文字群中心偏差 <1px、桌面卡片等高、語言切換、中文 Hero 文案與非斜體強調。另驗證 375px 的選單／Escape、Contact 同字體字級、mailto 與點擊高度。
18. **人工確認**：正式網站的段落呼吸感、中文與 EMBERLITE 名稱的光學重量、Coming Soon 的低調程度。英文 Placeholder 因名稱兩行而使副標位置與單行 EMBERLITE 略有差別，採「整組置中」而非强制逐行對齊。實體手機與 macOS／iOS 的字型呈現仍需人工確認。

## 檔案與範圍

- `index.html`、`en/index.html`：首頁 class、Products kicker 結構、Placeholder 文字群與資料狀態前綴。
- `css/home.css`：僅由雙語首頁載入的 spacing／component hierarchy 規則，使用內容雜湊 URL 避免 CSS 快取。共用 `css/style.css` 與 Typography Tokens 未改。
- `SPACING.md`：本報告。

本轮以獨立 checkout 處理。工作目錄中另有未提交的產品文案／截圖工作，未納入本次部署。未更換 Header／Footer 架構，不引入產品圖、動畫、價格、下載或新文案。本輪完成後停止，等待人工視覺驗收。
