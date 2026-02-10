import React, { useState } from 'react'; // 1. استيراد useState
import { Nav, Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./Navbar.css"

const NavbarS = () => {
  // 2. حالة للتحكم في فتح وإغلاق القائمة
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar 
      dir="rtl" 
      bg="dark" 
      variant="dark" 
      expand="lg" 
      className="navbar"
      expanded={expanded} // ربط الحالة بالـ Navbar
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="text-white">
          إسلامنا
        </Navbar.Brand>

        {/* 3. تغيير شكل الزر بناءً على الحالة */}
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(expanded ? false : "expanded")}
        >
          {expanded ? (
            <span style={{ fontSize: '1.5rem', color: '#fff', fontWeight: 'bold' }}>✕</span>
          ) : (
            <span className="navbar-toggler-icon"></span>
          )}
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* 4. إغلاق القائمة تلقائياً عند الضغط على أي رابط */}
            <NavLink to="/" className="ELE" onClick={() => setExpanded(false)}>الصفحة الرئيسية</NavLink>
            <NavLink to="/new" className="ELE" onClick={() => setExpanded(false)}>الأذكار</NavLink> 
            <NavLink to="/qur" className="ELE" onClick={() => setExpanded(false)}>أوقات الصلاة</NavLink>
            <NavLink to="/tafsir" className="ELE" onClick={() => setExpanded(false)}>تفسير القرآن الكريم</NavLink>
            <NavLink to="/Makka" className="ELE" onClick={() => setExpanded(false)}>مكة مباشر</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarS;