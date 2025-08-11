package com.kimyongje.portfolio.admin.controller;

import com.kimyongje.portfolio.admin.model.dto.auth.LoginReq;
import com.kimyongje.portfolio.admin.model.dto.auth.LoginRes;
import com.kimyongje.portfolio.admin.model.service.AdminService;
import com.kimyongje.portfolio.security.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AdminService service;
    private final JwtUtil jwt;

    @PostMapping("/login")
    public ResponseEntity<LoginRes> login(@RequestBody LoginReq req) {
        if (!service.verify(req.getAdminId(), req.getAdminPw())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        String token = jwt.generate(req.getAdminId());
        LoginRes res = new LoginRes(token);

        return ResponseEntity.ok(res);
    }
}