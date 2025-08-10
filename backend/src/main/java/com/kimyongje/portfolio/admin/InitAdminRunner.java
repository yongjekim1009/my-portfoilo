package com.kimyongje.portfolio.admin;

import com.kimyongje.portfolio.admin.model.dto.Admin;
import com.kimyongje.portfolio.admin.model.mapper.AdminMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.stereotype.Component;

// @Component
@RequiredArgsConstructor
public class InitAdminRunner implements CommandLineRunner {
	private final AdminMapper adminMapper;
    private final PasswordEncoder encoder;

    @Override
    public void run(String... args) {
        String adminId = "dydwp1009";
        String rawPw   = "yong!@00";

        if (adminMapper.countById(adminId) == 0) {
            Admin admin = new Admin(adminId, encoder.encode(rawPw));
            adminMapper.insertAdmin(admin);
            System.out.println("[INIT] ADMIN inserted: " + adminId);
        }
    }
}
