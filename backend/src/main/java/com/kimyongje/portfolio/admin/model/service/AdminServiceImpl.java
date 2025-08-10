package com.kimyongje.portfolio.admin.model.service;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.kimyongje.portfolio.admin.model.dto.Admin;
import com.kimyongje.portfolio.admin.model.mapper.AdminMapper;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AdminServiceImpl implements AdminService {
	private final AdminMapper adminMapper;
    private final PasswordEncoder encoder;

    @Override
    public boolean verify(String adminId, String rawPw) {
        Admin admin = adminMapper.findById(adminId);
        return admin != null && encoder.matches(rawPw, admin.getAdminPw());
    }
}
