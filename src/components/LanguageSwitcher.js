import React from "react";
import { useTranslation } from "react-i18next";
import Button from "react-bootstrap/Button";
import { MdLanguage } from "react-icons/md";

function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === "ar" ? "en" : "ar";
        i18n.changeLanguage(newLang);

        // Update document direction for RTL support
        document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
        document.documentElement.lang = newLang;
    };

    return (
        <Button
            onClick={toggleLanguage}
            className="language-btn"
            variant="outline-light"
            style={{
                marginLeft: "10px",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                fontWeight: "600",
                borderRadius: "8px",
                padding: "8px 16px",
            }}
        >
            <MdLanguage style={{ fontSize: "1.2em" }} />
            {i18n.language === "ar" ? "EN" : "عربي"}
        </Button>
    );
}

export default LanguageSwitcher;
