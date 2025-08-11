package com.kimyongje.portfolio.admin.model.dto.auth;

import lombok.Data;

@Data
public class LoginReq {
	private String adminId;
    private String adminPw;
}
