Feature: Đăng nhập
Feature Description:      Owner, Admin, Editor đăng nhập hệ thống bằng username và password
        Background: Đã tạo tài khoản Owner/Admin/Editor
            Given Có ít nhất 1 tài khoản Owner/Admin/Editor
    Rule: Username ít nhất 2 ký tự, password ít nhất 6 ký tự

        Scenario Outline: Đăng nhập thành công
            Given Ở màn hình login

             When Nhập username trong ô input <username>

              And Nhập password trong ô input <password>

              And Click button Đăng nhập, hoặc nhấn enter

             Then Đăng nhập thành công

              And Hệ thống navigate tới trang Dashboard

        Examples:
                  | username | password |

                  | admin | 123456 |

        Scenario Outline: Đăng nhập thất bại
            Given Ở màn hình login

             When Nhập username trong ô input <username>

              And Nhập password trong ô input <password>

              And Click button Đăng nhập, hoặc nhấn enter

             Then Hiển thị thông báo lỗi sai mật khẩu hoặc sai username

              And Vẫn ở màn hình Login

        Examples:
                  | username | password | error |

                  | chuadangky | P@ssword | username không tồn tại |

                  | sai password | 123456789 | Sai mật khẩu |

                  | sai username | a | Vui lòng nhập username ít nhất 2 ký tự |

