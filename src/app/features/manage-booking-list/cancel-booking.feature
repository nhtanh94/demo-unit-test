Feature: Hủy lịch khám
Feature Description: Hủy lịch khám
Background: Lịch khám có field cancelable = true
Scenario Outline: Hủy lịch khám thành công
Given ở màn hình danh sách lich
And chọn lịch khám cần Hủy
And Click button hủy lịch khám
And Show form hủy lịch khám - nhập input lý do hủy <reason>
And Click button xác nhận hủy lịch khám
Then Hiển thị thông báo hủy lịch khám thành công

Examples:
| orderId | reason |
|||

Scenario Outline: Không thể huỷ lịch khám vì đã quá giờ quy định được huỷ
Given ở màn hình danh sách lich
And chọn lịch khám cần Hủy
And Click button hủy lịch khám
And Show form hủy lịch khám - nhập input lý do hủy <reason>
And Click button xác nhận hủy lịch khám
Then Hiển thị thông báo Không thể huỷ lịch khám vì đã quá giờ quy định được huỷ
Examples:
| orderId | reason |
| YOUMEDO2105050006 | abc |


Scenario Outline: Trạng thái không hợp lệ hoặc lịch khám đã đươc huỷ trước đó


Given ở màn hình danh sách lich
And chọn lịch khám cần Hủy
And Click button hủy lịch khám
And Show form hủy lịch khám - nhập input lý do hủy <reason>
And Click button xác nhận hủy lịch khám
Then Hiển thị thông báo Trạng thái không hợp lệ hoặc lịch khám đã đươc huỷ trước đó
Examples:
| orderId | reason |
| YOUMEDO2105050003 | abc |


Scenario Outline: Không hỗ trợ huỷ lịch khám tại cơ sở y tế này


Given ở màn hình danh sách lich
And chọn lịch khám cần Hủy
And Click button hủy lịch khám
And Show form hủy lịch khám - nhập input lý do hủy <reason>
And Click button xác nhận hủy lịch khám
Then Hiển thị thông báo Không hỗ trợ huỷ lịch khám tại cơ sở ý tế này
Examples:
| orderId | reason |
