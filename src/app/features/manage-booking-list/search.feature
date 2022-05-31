Feature: Tìm kiếm lịch khám
Feature Desscription: Tìm kiếm lịch khám theo mã, tên bệnh nhân, số điện thoại, nơi khám bệnh, khu khám,
loại hình khám, chuyên khoa, phòng khám, bác sĩ, trạng thái thanh toán, thời gian
  Background: Đã đăng nhập bằng tài khoản Admin, Editor, Owner
  Scenario Outline: Tìm kiếm thành công
    Given Ở màn hình danh sách lịch khám
    When Nhập từ khóa trong ô input <query>
    And Chọn nơi khám trong ô dropdown <sId>
     And Chọn khu khám trong ô dropdown <examtypeId>
      And Chọn chuyên khoa trong ô dropdown <specialityId>
       And Chọn phòng khám trong ô dropdown <roomId>
        And Chọn bác sĩ trong ô dropdown <providerId>
        And Chọn trạng thái thanh toán trong ô dropdown <status>
        And Chọn thời gian bắt đầu và kết thúc trong ô chọn ngày  <startDate,endDate>
        And Click nút tìm kiếm hoặc nhấn enter
        Then Hệ thống hiển thị danh sách lịch khám phù hợp
  Examples:
    | query | sId | examtypeId | specialityId | roomIdId | providerId | status | startDate | endDate |
    | hello world | 3c9a30b8-fbf7-4eb4-bbab-10f00f723b1b | 5fc8ac40e70c2e372ea863a0 | 5fcdb31ae70c2e372ea863bf | 5ea8ee9731bda870b4902cb1 | 5e9ff4ea1a609e40eb825cb6 | UNCONFIRMED | 2021-04-29 | 2021-04-29 |

