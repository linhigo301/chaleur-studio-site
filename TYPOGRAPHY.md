# Typography 第二階段交付

2026-09-14。本次僅精修文字與共用 CSS，完成後停止，不延伸下一階段美術調整。

## 1–4：檔案、規則整理、Font Stack、Tokens

- 修改 `css/style.css`、`index.html`、`products/handover-system/index.html`、`products/emberlite/index.html`、`README.md`、`DELIVERY.md`；新增本文件。英文三頁透過共用 CSS 更新，英文 HTML 不需改動。
- 已移除獨立 WEB-002 override 區段，以及原始／WEB-002 被覆蓋的字級、行距、字距規則。樣式依 tokens、結構、Typography、Responsive 排列；同 breakpoint 的布局規則合併。
- 移除 380px 以下 Hero 32px 特例、手機 12px metadata 與 1.75／2.0 正文行距。Typography 沒有 `!important`；僅保留原有 reduced-motion 的 transition 規則。

```css
--sans: "Microsoft JhengHei", "PingFang TC", "Noto Sans TC", system-ui,
        -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
--serif: "Noto Serif TC", "Songti TC", "PMingLiU", Georgia, serif;

--type-hero: clamp(3.5rem, 4.7vw, 4.5rem);
--type-h2: clamp(2.5rem, 3.2vw, 3rem);
--type-h3: 1.875rem;
--type-principle: 1.5rem;
--type-body: 1.125rem;
--type-secondary: 1rem;
--type-meta: .8125rem;
--type-eyebrow: .875rem;
--type-control: 1rem;
--leading-hero: 1.18;
--leading-heading: 1.3;
--leading-body: 1.63;
```

Hero 與產品 H1／卡片標題用 Serif，H2 與理念小標用 Sans、字重 500。Chrome、Edge 的平台字型回報均確認 Hero 實際為 Noto Serif TC、中文正文為微軟正黑體。Wordmark 保留原先 Georgia 優先，不改品牌字樣。

1000px 以下：Hero `clamp(3rem, 6.5vw, 3.75rem)`、H2 40px、產品 H3 28px。
700px 以下：Hero `clamp(2.375rem, 10vw, 2.75rem)`、H2 `clamp(1.875rem, 8vw, 2.25rem)`、產品 H3 26px、正文 17px、Secondary 15px、Eyebrow 13px。Meta 維持 13px，不另縮小。

## 5–13：字級與閱讀尺度

以下為 Chrome、Edge 一致的實際 computed size（px，100% zoom／預設根字級 16px）：

| 視窗 | Hero H1 | H2 | 產品 H3 | 理念 H3 | Body | Secondary | Meta / Eyebrow | 導覽 / Button |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- | --- |
| 1920 × 1080 | 72 | 48 | 30 | 24 | 18 | 16 | 13 / 14 | 16 / 16 |
| 1366 × 768 | 64.20 | 43.71 | 30 | 24 | 18 | 16 | 13 / 14 | 16 / 16 |
| 1024 × 900 | 56 | 40 | 30 | 24 | 18 | 16 | 13 / 14 | 16 / 16 |
| 768 × 1024 | 49.92 | 40 | 28 | 24 | 18 | 16 | 13 / 14 | 16 / 16 |
| 390 × 844 | 39 | 31.2 | 26 | 24 | 17 | 15 | 13 / 13 | 16 / 16 |
| 375 × 812 | 38 | 30 | 26 | 24 | 17 | 15 | 13 / 13 | 16 / 16 |

Body line-height 1.63，中文正文 letter-spacing normal。主要長段落最大 44rem（704px），Hero 副標 680px；卡片與理念沿用原欄寬控制行長。Button 至少 48px，卡片連結至少 52px，功能文字連結／導覽／語言切換至少 44px，Email 至少 48px。Email 與 LINE ID 統一使用 Sans、Secondary 字級（桌面／平板 16px、手機 15px）、1.63 行距及較深 muted，並靠左對齊。六頁信箱前均加上「EMAIL ·」，保留 mailto 與至少 48px 點擊高度。

## 14：文字顏色

- 產品介紹、品牌理念、Contact、Local-first 與市場主要正文：既有深綠 Ink `#243c34`。
- 分類、狀態的輔助說明、breadcrumb、chip、圖說、LINE：較深 muted `#46574d`。
- Eyebrow、Selected tools、Footer、Hero 輔助資訊：既有 muted `#5c6860`。
- 暖橘 `#a4482e` 保留於「簡單」、理念編號、產品狀態。概念圖原配色保留。

## 15–18：Editorial 標題

Hero 已改為：

```text
把麻煩整理好
把簡單留給日常
```

第一行無逗號，末尾無句號；「簡單」保留 em 語意、視覺 font-style normal 與暖橘。

Approach 已改為：

```text
工具不必龐大
只要恰好有用
```

「不同日常，一樣用心」與所有繁中頁的「好的工具，從對話開始」已移除末尾句號，保留語意逗號。正文標點與 Hero 副標保留。英文維持自己的句法與語意標點，不新增逐字對照式斷行。

## 19–23：驗證與實際視覺觀察

Windows 已安裝 Google Chrome、Microsoft Edge，使用 Playwright 啟動各自瀏覽器。六頁（雙語首頁與四個產品頁）× 六視窗 × 兩瀏覽器，共 72 組本機檢查通過並保存全頁截圖於 `.preview/web003-*.png`。沒有橫向頁面溢出、JavaScript 例外或低於 13px 的受檢輔助文字；主要受檢正文皆至少 17px。語言切換連回對應產品／首頁。

- Desktop：中文 Hero 自然兩行，暖橘字沒有斜體歪斜感；H2 的 Sans 筆畫清楚，產品正文與分類的大小、顏色層級可辨識。桌面英文 Contact 自然分行，不與 Email 重疊。
- Tablet：768／1024 的雙欄產品仍可閱讀；768 分類和狀態分列，英文產品名按單字換行。三項理念正文與編號有清楚層次；英文 Approach 可依欄寬呈三行，無硬拆單字。
- Mobile：390／375 中文 Hero 和 Approach 皆自然兩行，375 Hero 仍為 38px。卡片描述、理念正文不再呈附註尺寸；Email 未截斷，功能連結有至少 44px 點擊高度。375 Header 沿用既有分列處理。
- zh-TW：截圖已檢視 Hero、產品、理念、Contact 與產品詳情；另外以文字 Range 測量 375px 主標實際兩行。繁中展示標題無多餘行尾標點，正文正常保留標點。
- en-GB：已檢視 Desktop、Tablet、Mobile 首頁與產品頁截圖；長標題與介紹自然換行，沿用相同層級，沒有為對齊中文而硬拆英文。
- 另測兩瀏覽器雙語手機選單展開、Escape 收合、重新整理、語言／按鈕／Email 點擊高度及 mailto 目標，全部通過。實際字型以 Chromium CSS.getPlatformFontsForNode 確認。

測試脚本與 JSON 為 `.preview/web003.cjs`、`.preview/web003-interactions.cjs`、`.preview/web003-results.json`，僅存本機，不納入公開部署。

## 24：尚待人工確認

請品牌方以正式部署頁面確認 Noto Serif Hero／Sans H2 的最終氣質、閱讀密度與字重。測試使用 Windows 桌面瀏覽器的 responsive viewport，並非實體手機；macOS／iOS 字型 fallback、作業系統縮放及使用者自訂字級尚待實機確認。本階段停止，不自動進行 spacing、卡片比例、產品圖像、Header 或動畫精修。
