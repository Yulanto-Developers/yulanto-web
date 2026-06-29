export interface AppContextType {
    // Main sidebar (primary offcanvas)
    isMainSidebarOpen: boolean;
    setMainSidebarOpen: (value: boolean) => void;
    toggleMainSidebar: () => void;

    // Secondary sidebar (secondary offcanvas)
    isSecondarySidebarOpen: boolean;
    setSecondarySidebarOpen: (value: boolean) => void;
    toggleSecondarySidebar: () => void;

    // Search modal
    isSearchModalOpen: boolean;
    setSearchModalOpen: (value: boolean) => void;
    toggleSearchModal: () => void;

    // Mini cart
    isMiniCartOpen: boolean;
    setMiniCartOpen: (value: boolean) => void;
    toggleMiniCart: () => void;
}