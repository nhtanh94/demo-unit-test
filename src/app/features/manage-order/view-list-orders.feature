Feature: Xem danh sách lịch khám
Feature Description: Xem danh sách thanh toán, hóa đơn, thông tin chi tiết hóa đơn của BV, PK
  Background: Đã đăng nhập
  Given Có ít nhất 1 tài khoản Owner/Admin/Editor
  Scenario Outline: Xem danh sách lịch khám thành công
    Given Ở màn hình trang chủ sau khi đăng Nhập
      When Bấm vào link Danh sách lịch khám trên sidebar
      And Hệ thống navigate tới trang Danh sách lịch khám
      Then Hiển thị danh sách lịch khám
