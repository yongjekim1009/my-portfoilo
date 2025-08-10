package com.kimyongje.portfolio.security;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Collections;

@Component
@RequiredArgsConstructor
public class JwtAuthFilter extends OncePerRequestFilter {
    private final JwtUtil jwt;

    @Override
    protected void doFilterInternal(HttpServletRequest req, HttpServletResponse res, FilterChain chain)
            throws ServletException, IOException {

        String auth = req.getHeader("Authorization"); // "Bearer <token>"
        
        if (auth != null && auth.startsWith("Bearer ")) {
            String token = auth.substring(7);
            
            try {
                String adminId = jwt.subject(token);
                var authentication = new UsernamePasswordAuthenticationToken(
                        adminId, null, Collections.emptyList());
                SecurityContextHolder.getContext().setAuthentication(authentication);
                
            } catch (Exception ignored) {}
        }
        chain.doFilter(req, res);
    }
}
