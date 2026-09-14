# WEB-006｜GA4 網站流量分析、管理者排除與推廣追蹤

2026-09-14。基於網站 GitHub 同步 HEAD `e6431c3` 實作。本次是 Analytics 工單，既有 `WEB006.md` 產品頁收尾紀錄保持原狀。完成本機驗證後，使用者已確認發布，透過本站 `main` 分支交由 GitHub Pages 部署。Measurement ID 保留 Placeholder，本次發布不啟用正式 Google 資料收集。

## 交付

- 新增 `js/analytics.js`：集中開關／Placeholder ID、管理者排除、單次手動 Page View、四種互動事件、UTM 公開值清單、網址資料縮減、Console dry-run 與 Consent 接口。
- 六個 `index.html` 只增加一個 defer script，以及將原有 LINE 文字轉為相同 ID 的連結。路徑支援 GitHub project Pages 子目錄。
- `js/handover-scenarios.js` 兩語聯絡欄同步為 LINE 連結，交班 HTML 更新該資源雜湊，避免情境 renderer 蓋回文字。
- README 新增 Analytics 操作、事件及待辦；新增 `tests/analytics.cjs` 可重跑的隔離瀏覽器測試。
- 未修改 CSS、字體、首頁設計、圖片、產品事實、既有 DEMO 入口／狀態／檔案或產品 App。現況已有 DEMO，依工單保留；本次不綁定 DEMO 事件。

## 驗證結果

Chrome、Edge；六頁 × 桌機 1440px／手機視窗 375px，共 24 組，連同功能案例共 484 項 assertion 通過。使用隔離瀏覽器及離線 Google script 替身，所有外部網路攔截，未使用真實 Measurement ID。

- 六頁 `page_view` 每次文件載入一次；path／title／zh-TW／en-GB 正確，hash 與情境變更不增加 Page View。
- `language_switch`、兩產品 `product_view_click`、`cta_click`、email／line `contact_click` 均通過；產品卡同時發一個產品事件與一個 CTA 事件，兩者不可加總當獨立訪客數。
- A 正常、B internal=1、C 跨頁仍排除、D internal=0、E 恢復通過；Placeholder 與離線啟用路徑都測過。
- 排除狀態沒有 Google script、dataLayer 或事件；保留 UTM／其他參數／hash，僅移除 internal；另一獨立瀏覽器 context 不受影響。
- 非必要 query／hash／referrer 路徑／未核准 UTM 值不進入 GA 命令；email 及 LINE 事件只含方法類型，沒有聯絡地址／ID。
- Placeholder 無 Google 請求且 Console dry-run 綁定有效；開關關閉、錯誤 ID、storage 禁用均不啟動。
- Consent 要求模式：未同意不載入；同意後一次 Page View；撤回重新載入後不啟動；再次同意可恢復。
- GA script 失敗不阻擋頁面／語言導覽；手機選單與 Escape 正常；無水平溢位及未處理 JavaScript 例外。
- 記憶體中新增第三個產品卡，既有委派追蹤生效；另測兩個活動名稱對應 campaign、未核准 campaign 值覆寫為空，以及已開分頁接到排除後停止事件與 GA。

以上是程式與瀏覽器驗證，不代表 Google GA4 後台收到真實資料，也不是實體 iPhone／Safari 驗收。LINE 測試驗證連結與點擊事件，未登入 LINE 驗證帳號可加好友。

## 待完成條件

正式 ID、GA4 Enhanced Measurement／資料設定、Realtime／DebugView 入站確認及 UK／EU Consent／Cookie 流程待完成。詳見 README。未宣稱符合所有國家法規，未開始下一階段。
