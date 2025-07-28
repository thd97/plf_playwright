# PLF Playwright Automation

## Giới thiệu

Đây là description nhưng mà chưa biết viết gì

## Cấu trúc thư mục

```
.env                       # Thông tin cấu hình môi trường (domain, email, password, v.v.)
.gitignore                 # Các file/thư mục bị loại trừ khỏi git
package.json               # Thông tin project và dependencies
playwright.config.js       # Cấu hình Playwright
pages/                     # Các file định nghĩa page object
selectors/                 # Định nghĩa các selector dùng trong test
testcases/                 # Các file test chính
tests-examples/            # Các ví dụ test mẫu
utils/                     # Các hàm tiện ích hỗ trợ test
playwright-report/         # Báo cáo kết quả test (tự động sinh ra)
test-results/              # Kết quả test (tự động sinh ra)
```

## Cài đặt

1. Cài đặt Node.js (khuyến nghị >= 16).
2. Cài đặt dependencies:
   ```sh
   npm install
   ```

## Thiết lập cấu hình

- Sửa file [.env](.env) với thông tin domain, email, password, tên store và đường dẫn file CSV phù hợp.

## Chạy test

- Chạy toàn bộ test ở chế độ headless:
  ```sh
  npx playwright test
  ```
- Chạy toàn bộ test ở chế độ UI:
  ```sh
  npx playwright test --headed
  ```

- Xem báo cáo test:
  ```sh
  npx playwright show-report
  ```