package com.kimyongje.portfolio.admin.model.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.kimyongje.portfolio.admin.model.dto.Admin;

@Mapper
public interface AdminMapper {
	
	// 일회용 관리자 아이디 / 암호화 패스워드 등록
	Admin findById(String adminId);
    int countById(String adminId);
    int insertAdmin(Admin admin);
}