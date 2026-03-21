import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../App.css";
import "./Navbar.css";
import "../../index.css";

const isInternalRoute = (href = "") => href.startsWith("/") && !href.startsWith("/#");

const primaryNavItems = [
    { label: "Home", href: "/", matchPath: "/" },
    {
        label: "WAMS Society",
        href: "/#society",
        children: [
            { label: "WAMS Membership", href: "https://wams-society.com", external: true },
            { label: "Current members", href: "/#current-members" },
            { label: "Previous WAMS", href: "/#previous-wams" },
        ],
    },
    { label: "Committee", href: "/committee", matchPath: "/committee" },
    {
        label: "Authors", href: "/#authors",
        matchPath: "/call-for-paper",
        children: [
            { label: "Call For Papers", href: "/call-for-paper" },
            { label: "Paper Submission", href: "/paper-submission" },
            { label: "CRC & Copyright Submission", href: "/#crc-submission" },
        ],
    },
    { label: "Awards", href: "/#awards" },
    {
        label: "Travel Grant",
        href: "/travel-grant",
        matchPath: "/travel-grant",
    },
    {
        label: "WIE/YP/SA",
        href: "/#wie",
        children: [
            { label: "WIE", href: "/#wie-focus" },
            { label: "YOUNG PROFESSIONALS", href: "/#young-professionals" },
            {
                label: "Student Activities",
                href: "/#student-activities",
                children: [
                    { label: "Student Paper Contest", href: "/#student-paper-contest" },
                    { label: "Student Workshop", href: "/#student-workshop" },
                ],
            },
        ],
    },
    { label: "Accommodation", href: "/#accommodation" },
    {
        label: "Special Sessions",
        href: "/call-for-special-sessions",
        matchPath: "/call-for-special-sessions",
        children: [
            { label: "Call For Special Sessions", href: "/call-for-special-sessions" },
            { label: "Accepted Sessions", href: "/#accepted-sessions" },
        ],
    },
    { label: "Speakers", href: "/#speakers" },
    { label: "Registration", href: "/#registration" },
    {
        label: "Sponsors",
        href: "/sponsors",
        matchPath: "/sponsors",
        children: [
            { label: "Sponsorship Brochure", href: "/sponsors#sponsorship-brochure" },
            { label: "Become a Sponsor", href: "/sponsors#become-a-sponsor" },
        ],
    },
];

const secondaryNavItems = [
    { label: "Nearby Attractions", href: "/travel-grant#nearby-attractions", matchPath: "/travel-grant" },
    { label: "Important Dates", href: "/travel-grant#important-dates", matchPath: "/travel-grant" },
    { label: "Contact Us", href: "/contact-us", matchPath: "/contact-us" },
];

function DesktopNavItem({ item, currentPath, isSubmenu = false }) {
    const linkProps = item.external ? { target: "_blank", rel: "noreferrer" } : {};
    const isActive = !isSubmenu && item.matchPath ? item.matchPath === currentPath : false;

    if (!item.children) {
        if (!item.external && isInternalRoute(item.href)) {
            return (
                <li>
                    <Link to={item.href} className={isActive ? "active" : ""}>{item.label}</Link>
                </li>
            );
        }

        return (
            <li>
                <a href={item.href} className={isActive ? "active" : ""} {...linkProps}>{item.label}</a>
            </li>
        );
    }

    return (
        <li className={isSubmenu ? "has-submenu" : "has-dropdown"}>
            <a href={item.href}>
                {item.label}
                <span className={isSubmenu ? "sub-arrow" : "nav-arrow"}>{isSubmenu ? "▸" : "▾"}</span>
            </a>
            <ul className={isSubmenu ? "dropdown-submenu" : "dropdown-menu"} aria-label={`${item.label} submenu`}>
                {item.children.map((child) => (
                    <DesktopNavItem key={child.label} item={child} currentPath={currentPath} isSubmenu />
                ))}
            </ul>
        </li>
    );
}

function MobileNavItem({ item, itemKey, level, currentPath, openSections, onToggleSection, onNavigate }) {
    const hasChildren = Boolean(item.children?.length);
    const isOpen = Boolean(openSections[itemKey]);
    const linkProps = item.external ? { target: "_blank", rel: "noreferrer" } : {};
    const paddingLeft = `${1.25 + (level * 1.1)}rem`;
    const isActive = item.matchPath ? item.matchPath === currentPath : false;
    const toggleCurrentSection = () => onToggleSection(itemKey);

    if (!hasChildren) {
        if (!item.external && isInternalRoute(item.href)) {
            return (
                <li className="mobile-nav-item">
                    <Link
                        to={item.href}
                        className={`mobile-nav-link-single${isActive ? " active" : ""}`}
                        onClick={onNavigate}
                        style={{ paddingLeft }}
                    >
                        {item.label}
                    </Link>
                </li>
            );
        }

        return (
            <li className="mobile-nav-item">
                <a
                    href={item.href}
                    className={`mobile-nav-link-single${isActive ? " active" : ""}`}
                    onClick={onNavigate}
                    style={{ paddingLeft }}
                    {...linkProps}
                >
                    {item.label}
                </a>
            </li>
        );
    }

    return (
        <li className={`mobile-nav-item has-children${isOpen ? " is-open" : ""}`}>
            <div className={`mobile-nav-item-row${item.active ? " active" : ""}`} style={{ paddingLeft }}>
                <button
                    type="button"
                    className="mobile-nav-link mobile-nav-parent"
                    aria-expanded={isOpen}
                    aria-label={`Open ${item.label} submenu`}
                    onClick={toggleCurrentSection}
                >
                    {item.label}
                </button>
                <button
                    type="button"
                    className="mobile-nav-toggle"
                    aria-expanded={isOpen}
                    aria-label={`Toggle ${item.label} submenu`}
                    onClick={toggleCurrentSection}
                >
                    <span className="mobile-nav-chevron">▾</span>
                </button>
            </div>
            <ul className={`mobile-submenu${isOpen ? " is-open" : ""}`}>
                {item.children.map((child, index) => (
                    <MobileNavItem
                        key={`${itemKey}-${child.label}`}
                        item={child}
                        itemKey={`${itemKey}-${index}`}
                        level={level + 1}
                        openSections={openSections}
                        onToggleSection={onToggleSection}
                        onNavigate={onNavigate}
                    />
                ))}
            </ul>
        </li>
    );
}

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openSections, setOpenSections] = useState({});
    const location = useLocation();

    useEffect(() => {
        setIsMobileMenuOpen(false);
        setOpenSections({});
    }, [location.pathname]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 900) {
                setIsMobileMenuOpen(false);
                setOpenSections({});
            }
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleSection = (sectionKey) => {
        setOpenSections((previousSections) => ({
            ...previousSections,
            [sectionKey]: !previousSections[sectionKey],
        }));
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setOpenSections({});
    };

    return (
        <nav className="navbar">
            <div className="navbar-row-1">
                <Link to="/" className="logo">WAMS 2027</Link>
                <button
                    type="button"
                    className="navbar-menu-toggle"
                    aria-expanded={isMobileMenuOpen}
                    aria-label="Toggle navigation menu"
                    onClick={() => setIsMobileMenuOpen((previousState) => !previousState)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul className="nav-links">
                    {primaryNavItems.map((item) => (
                        <DesktopNavItem key={item.label} item={item} currentPath={location.pathname} />
                    ))}
                </ul>
            </div>
            <div className="navbar-row-2">
                <ul className="nav-links-secondary">
                    {secondaryNavItems.map((item) => (
                        <li key={item.label}>
                            {isInternalRoute(item.href) ? (
                                <Link to={item.href} className={item.matchPath === location.pathname ? "active" : ""}>
                                    {item.label}
                                </Link>
                            ) : (
                                <a href={item.href} className={item.matchPath === location.pathname ? "active" : ""}>
                                    {item.label}
                                </a>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <div className={`mobile-nav-panel${isMobileMenuOpen ? " is-open" : ""}`}>
                <ul className="mobile-nav-list">
                    {[...primaryNavItems, ...secondaryNavItems].map((item, index) => (
                        <MobileNavItem
                            key={item.label}
                            item={item}
                            itemKey={`mobile-${index}`}
                            level={0}
                            currentPath={location.pathname}
                            openSections={openSections}
                            onToggleSection={toggleSection}
                            onNavigate={closeMobileMenu}
                        />
                    ))}
                </ul>
            </div>
        </nav>

    )
}

export default Navbar;