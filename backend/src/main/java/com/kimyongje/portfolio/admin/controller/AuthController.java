package com.kimyongje.portfolio.admin.controller;

import com.kimyongje.portfolio.admin.model.service.AdminService;
import com.kimyongje.portfolio.security.JwtUtil;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AdminService adminService;
    private final JwtUtil jwt;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginReq req) {
        if (!adminService.verify(req.getAdminId(), req.getAdminPw())) {
            return ResponseEntity.status(401).body("Invalid credentials");
        }
        String token = jwt.generate(req.getAdminId());
        return ResponseEntity.ok(new LoginRes(token));
    }

    @Data
    public static class LoginReq {
        private String adminId;
        private String adminPw;
    }
    public record LoginRes(String token) {}
}
