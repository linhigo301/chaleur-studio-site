# CHALEUR-WEB-001｜第一版交付紀錄

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
