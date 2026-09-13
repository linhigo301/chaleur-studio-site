# CHALEUR-WEB-001｜第一版交付紀錄

2026-09-14 WEB-006：完成產品頁專業收尾，統一服務對象用語、調整本機資料說明、降低重複框線、第五張月曆限制原始寬度、分開 DEMO 版本資訊與下載按鈕，並補齊 canonical／Open Graph。五張原圖與下載網址不變。Chrome／Edge 六種尺寸雙語共 24 組驗證通過，依工單直接發布；詳見 [WEB-006 交付紀錄](WEB006.md)。

2026-09-14 本次發布：使用者已確認發布 WEB-005 與後續調整，包含五組圖片順序、五組標題／正文上緣對齊、下半部標題垂直置中、移除圖框底色，以及繁體中文版 V1.3.13 DEMO 下載入口。以下「未發布／僅本機預覽」為各次修改歷史。正式商用版本仍未發行。

2026-09-14 圖片排序追加：依使用者最新指定，展示區改為 01 接班開始、02 建立服務對象事件時間軸、03 人員事件追查、04 跨班處理、05 月份回看，共五組。第 01 張為 DEMO 本班概況，保留 ENGINEERING／DEMO 專有限制；其餘四張保留 V1.3.13 標籤。此追加取代前版三組 Feature／四張圖的安排，其餘 WEB-005 內容維持。仍僅本機預覽、未發布。

2026-09-14 最新工單 WEB-005 已完成，交付與 Chrome／Edge 六種尺寸、雙語共 24 組驗證結果見 [WEB005.md](WEB005.md)。本工單僅本機預覽，未提交、推送或發布；下方為既有發布與交接歷史。

2026-09-14 發布更新：使用者已確認發布此版產品頁，透過既有 GitHub Pages（`linhigo301/chaleur-studio-site`，`main` 分支）部署。以下「僅本機預覽／未發布」為先前預覽階段紀錄。產品本身的正式發行、DEMO 下載及授權條件仍保留待確認，網站發布不代表產品發行核准。

## 2026-09-14｜交班產品交接資料預覽

- 兩份 Markdown、原四張 JPEG 及使用者追加的住民月曆 PNG，原樣複製至 `docs/product-handoff/`；七個檔案逐一 SHA-256 比對一致。來源僅讀取，未修改或啟動來源產品。
- 完成繁中／英文產品頁、首頁產品摘要與工程版展示註記。新增月曆圖由使用者確認同為 V1.3.13；原截圖清冊維持原樣，追加記錄見 `content/products/handover-system.md`。
- 更正舊版床數、買斷及市場敘述，明確保留待確認與規劃中項目。系統資訊圖使用原生可展開區塊，所有圖片可開啟原尺寸。
- Chrome 六頁 × 1440／768／390／320px 共 24 組通過：唯一 h1、無橫向溢出、頁內錨點、語言連結、五張圖載入與比例、手機選單、無 JavaScript 導覽與展開功能。無瀏覽器執行或 HTTP 資源錯誤；已檢視桌面與手機畫面。
- 驗證檔案位於忽略的 `.preview/handoff-results.json` 與 `.preview/handoff-*.png`。本次未重測產品功能，也未測試真實手機或 Safari。
- 僅本機預覽，未 commit、push 或發布。以下為先前交付歷史。

完成日期：2026-09-13。本次停止於工單第一階段，沒有新增第二階段功能。

## 可直接確認的完成項目

| 項目 | 結果 |
| --- | --- |
| 本機位置 | `C:\Users\user\chaleur-studio-site`，直接位於工作區根目錄，無重複子目錄 |
| Git | 獨立本機 Repository；目前 branch：`main`，已建立首次提交並推送 |
| GitHub Repository | 已確認公開 Repository：`linhigo301/chaleur-studio-site` |
| Remote | `origin` → `https://github.com/linhigo301/chaleur-studio-site.git`；追蹤 `origin/main` |
| 技術 | 純 HTML／CSS／JavaScript，無框架、套件、資料庫或後端 |
| 品牌首頁 | Hero、品牌理念、Products／兩張產品卡、三項設計理念、聯絡資訊、語言切換、頁尾 |
| 交班系統 | 依工單可確認範圍完成雙語介紹；包含約 20～30 床定位、12 項核心範圍、Local-first 理由、單機買斷方向、目前市場及規劃中市場 |
| EMBERLITE | 雙語產品卡與獨立產品頁骨架已完成，只描述已確認的暗房計時器定位 |
| zh-TW | 首頁及兩個產品頁完成，未提供資訊明確保留 Placeholder |
| en-GB | 同樣三頁完成，使用英式用語；不宣稱已有英文產品版或海外實績 |
| 繁中 \| EN | 六頁逐頁往返切換成功，保留產品上下文，無 JS 也可切換 |
| Desktop | Chrome 1440px，六頁功能與溢出檢查通過 |
| Tablet | Chrome 768px，六頁功能與溢出檢查通過 |
| Mobile | Chrome 390px 與 320px，六頁功能與溢出檢查通過；單欄排版、可展開選單 |
| Pages 部署 | 已啟用 `main / (root)` 分支發佈與 HTTPS；網址 `https://linhigo301.github.io/chaleur-studio-site/` |
| 公開聯絡方式 | Email mailto 連結、繁中 LINE ID；未加入個人真實姓名 |
| 維護文件 | README、兩份產品內容交接文件、完整檔案樹與替圖／部署說明 |
| 專案隔離 | 未讀取、修改或複製任何產品 Repository 原始碼 |

## 建立的完整檔案樹

以下 18 個檔案均為本工單新建的交付檔案：

```text
chaleur-studio-site/
├── .gitignore
├── .nojekyll
├── index.html
├── en/
│   ├── index.html
│   └── products/
│       ├── handover-system/index.html
│       └── emberlite/index.html
├── products/
│   ├── handover-system/index.html
│   └── emberlite/index.html
├── css/style.css
├── js/main.js
├── content/products/
│   ├── handover-system.md
│   └── emberlite.md
├── images/
│   ├── handover/.gitkeep
│   ├── emberlite/.gitkeep
│   └── logo/.gitkeep
├── favicon/.gitkeep
├── README.md
└── DELIVERY.md
```

另有 `.git/` 本機 Git 中繼資料與 `.preview/` 本機施工驗證暫存目錄，不屬公開交付內容。`.preview/` 已由 `.gitignore` 排除；含暫存產頁工具 `build.py`、驗證腳本 `check.cjs`、`results.json` 及桌面／手機畫面截圖。頁面執行不依賴這些工具。

## 驗證紀錄

- 上線後已在 `https://linhigo301.github.io/chaleur-studio-site/` 重跑完整 24 組驗證，全部通過；HTTPS、六頁、CSS／JS、語言切換、重新整理、手機選單、無 JavaScript 導覽及 reduced-motion 均正常。
- 使用 Playwright 控制本機 Google Chrome，驗證六頁 × 四種寬度，共 24 組。
- 每組確認正確 `lang`、唯一 h1、無橫向溢出、語言連結的正確目標、HTTP 資源成功載入及頁內錨點存在。
- 每頁皆以目錄網址直接載入並重新整理，驗證 GitHub Pages 專案子路徑不會遺失 CSS／JS。
- 手機測試展開選單、Escape 關閉、點擊產品導覽、收合選單。
- 停用 JavaScript 後驗證手機導覽可見、語言切換正常。
- 減少動態效果偏好下，平滑捲動停用。
- 無 JavaScript 執行錯誤；檢查到的內部資源／頁面請求無 HTTP 錯誤。
- 已人工檢視桌面與手機全頁截圖。測試曾發現手機截圖占位區撐寬版面，已修正並全數重測通過。
- 圖片尚未提供，因此目前驗證的是 CSS 插畫／HTML 占位，不是真實截圖的載入。

## 尚未完成項目

- 正式截圖與下載內容仍需產品資料補齊，詳見下方 Placeholder。
- 英文 DEMO 不在本次範圍內，也未預設已存在。
- 未進行真實手機、Safari 或 Firefox 的實機測試；已完成 Chrome 響應式視窗驗證。

## Placeholder

- 兩個產品的正式截圖，目前顯示清楚標示的占位區，沒有破圖。
- 交班系統繁中 DEMO 與產品下載 URL，目前僅顯示待提供狀態。
- EMBERLITE 的完整功能、支援平台、使用方式、授權、圖片、DEMO 可用性及下載連結。
- 正式 Logo／favicon 目錄已預留，目前使用品牌文字，沒有假裝已有正式品牌圖像。
- 交班系統正式價格未填入；規劃中市場明確標示 Coming Soon，沒有當作已提供版本。

## 需要人工確認項目

1. 上線後的品牌文案與視覺最終確認；GitHub Repository 與部署設定已完成。
2. 兩個產品專案各自提供經人工確認的「網站產品資料.md」。尤其 EMBERLITE 的完整資料尚缺。
3. 兩產品可公開的真實圖片。建議 1600 × 900 或保留原生比例；交班畫面需先去識別化。
4. 正式 DEMO／下載連結、版本、支援環境與可公開的授權說明。
5. 可選的正式 Logo／favicon、未來 Custom Domain，以及上線前品牌文案與英譯的最終確認。

圖片檔名、替換位置與完整資料更新流程詳見 README。

## 人工啟用 Pages

已完成設定。如需查看，前往 **Settings → Pages → Build and deployment → Deploy from a branch → main → / (root)**。後續經確認的網站修改推送到 `main` 後會自動部署。完整操作與 Custom Domain 步驟列於 README。

## 已知問題與限制

目前測試範圍內沒有已知的阻塞性導覽或排版問題。實際產品畫面與下載尚待正式資料，這些是刻意保留的內容缺項。系統字型會依使用裝置略有差異。交付 HTML 為人工維護的雙語靜態檔，後續內容修改需同步兩語言頁面。

## WEB-002｜Hero 與全站可讀性

- 中文首頁主標改為「把麻煩整理好，／把簡單留給日常。」；副標文字保留，英文主標與副標保留。
- 中英文首頁右側抽象插圖及專用 CSS 已移除，Hero 改成文字與留白。
- `css/style.css` 新增語意字級 token：`--type-h1`、`--type-h2`、`--type-h3`、`--type-body`、`--type-small`、`--type-control`、`--leading-body`。
- Hero／產品 H1 行高 1.25、H2／產品標題 1.4、正文 1.75；按鈕最小高度 48px、手機選單 44px。
- 產品卡說明、理念正文、Contact 說明與功能項目採正常正文字級；狀態、圖說、LINE、導覽、語言切換至少 16px。
- 平板產品卡分類與狀態分行排列，卡片連結維持底部對齊；Contact 在平板改為垂直排列，避免英文標題與 email 互相擠壓。
- 交班系統市場註記的 inline 13px 已改用 `.market-note`，跟隨正文字級。

以下為 Chrome 實際計算字級，單位 px（預設根字級 16px）：

| 寬度 | Hero H1 | H2 | 產品 H3 | Body | 輔助 Small | 導覽／按鈕 |
| --- | --- | --- | --- | --- | --- | --- |
| 1920 Desktop | 76.8 | 44 | 30 | 18 | 13 | 16 |
| 1366 Desktop | 68.3 | 36 | 30 | 18 | 13 | 16 |
| 1024 Tablet 橫向 | 51.2 | 36 | 30 | 18 | 13 | 16 |
| 768 Tablet | 49.92 | 36 | 28 | 17 | 13 | 16 |
| 390 Mobile | 39 | 31.2 | 26 | 17 | 12 | 16 |
| 320 窄螢幕補充 | 32 | 30 | 26 | 17 | 12 | 16 |

H1 桌面採 `clamp(3.2rem, 5vw, 4.8rem)`；手機採 `clamp(2.375rem, 10vw, 2.75rem)`。380px 以下僅首頁 H1 調為 32px，保留中文完整兩行，並將品牌與導覽控制分列；產品頁 H1 仍依手機 token，必要時自然換行。理念三項標題為桌面／平板 24px、手機 22px，與產品 H3 分層。

驗證完成：六頁 × 六尺寸，共 36 組頁面檢查；另對全部主要閱讀文字檢查 computed font-size 不低於 16px。中英文語言切換、重新整理、Header、產品卡、Contact、手機選單、無 JavaScript 導覽與減少動態效果偏好均正常，無橫向溢出。已檢視桌面、平板、手機的中英文全頁截圖。

未變更 DEMO／下載功能、下載連結、價格、產品功能或正式產品資料。維持原有米白、深綠、暖橘配色及產品卡概念圖。沒有已知需人工排除的排版問題；實體裝置、Safari／Firefox 的字型呈現尚未實測，最終閱讀感受可由品牌方再確認。


## Typography 第二階段（2026-09-14）

現行 Typography 規則、字級與驗證結果以 [TYPOGRAPHY.md](TYPOGRAPHY.md) 為準。上方 WEB-002 為歷史紀錄；其 CSS 覆蓋區段、1.75 正文行距、手機 12px metadata 與 32px Hero 已移除／整合。


現行規則以 [WEB-004_FIX 交付報告](WEB004.md) 為準：Typography 選擇器進一步分層，Contact 改用 Ink，首頁抽象圖改為純文字 Placeholder。上方舊版本描述保留作歷史紀錄。

## 追加交班概要畫面

已新增使用者提供的 DEMO 交班概要 PNG（第六張），繁中／英文同步說明剪貼簿手動貼上 LINE／群組與同步保存 Excel。圖片旁保留 ENGINEERING／DEMO 適用限制；原五張的版本註記不變。六頁四種寬度共 24 組檢查再次通過，六張圖片均正常載入。仍未發布。
