# PLF Playwright Automation

## Giới thiệu

Project này sử dụng Playwright để tự động hóa kiểm thử (automation test) cho các luồng nghiệp vụ trên hệ thống PLF.

## Cấu trúc thư mục

```
.env                       # Thông tin cấu hình môi trường cần kiểm tra trước khi chạy test
.gitignore                 # Các file/thư mục bị loại trừ khỏi git
package.json               # Thông tin project và dependencies
playwright.config.js       # Cấu hình Playwright
pages/                     # Các function dùng cho từng màn hình
selectors/                 # Định nghĩa các selector của từng màn hình
testcases/                 # Các file test chính
tests-examples/            # Các ví dụ test mẫu
playwright-report/         # Báo cáo kết quả test (tự động sinh ra)
test-results/              # Kết quả test (tự động sinh ra)
import_files/              # Nơi chứa các file .csv, .xlsx,... phục vụ cho việc import
```

## Cài đặt

1. Cài đặt Node.js (khuyến nghị >= 16).
2. Cài đặt dependencies:
   ```sh
   npm install
   ```

## Thiết lập cấu hình

- Sửa file [.env](.env) với các thông tin phù hợp.
- Chỉnh sửa 1 số config playwright như browser muốn chạy, chạy ở chế độ UI hoặc headless ở file [playwright.config.js](playwright.config.js).

## Chạy test

- Chạy toàn bộ test nằm trong thư mục [testcases](testcases):
  ```sh
  npx playwright test
  ```
- Chạy 1 file test đơn lẻ:
  ```sh
  npx playwright test testcases/<file_name>
  ```
  Trong đó `<file_name>` là tên file test muốn chạy, ví dụ: `importCSVMerchizeOrder.spec.js`

- Xem báo cáo test:
  ```sh
  npx playwright show-report
  ```