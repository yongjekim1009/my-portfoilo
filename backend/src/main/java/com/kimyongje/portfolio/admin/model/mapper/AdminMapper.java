package com.kimyongje.portfolio.admin.model.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.kimyongje.portfolio.admin.model.dto.Admin;

@Mapper
public interface AdminMapper {
	
	// 일회용 관리자 아이디 / 암호화 패스워드 등록
	Admin findById(String adminId);
    int countById(String adminId);
    int insertAdmin(Admin admin);
//	@Select("""
//		    SELECT ADMIN_ID AS adminId, ADMIN_PW AS adminPw
//		    FROM ADMIN_USER
//		    WHERE ADMIN_ID = #{adminId}
//		  """)
//		  Admin findById(@Param("adminId") String adminId);
//
//		  @Select("SELECT COUNT(*) FROM ADMIN_USER WHERE ADMIN_ID = #{adminId}")
//		  int countById(@Param("adminId") String adminId);
//
//		  @Insert("""
//		    INSERT INTO ADMIN_USER (ADMIN_ID, ADMIN_PW)
//		    VALUES (#{adminId}, #{adminPw})
//		  """)
//		  int insertAdmin(Admin admin);
}