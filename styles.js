// styles.js - Kumpulan Style untuk Aplikasi Game Slot

export const globalStyles = {
  body: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    margin: 0,
    padding: 0,
    backgroundColor: "#f5f7fa",
    color: "#333",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
  },
};

export const authStyles = {
  authContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f0f2f5",
  },
  authBox: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    width: "350px",
    textAlign: "center",
  },
  authTitle: {
    color: "#2c3e50",
    marginBottom: "20px",
  },
  authInput: {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "16px",
  },
  authButton: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#3498db",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
    "&:hover": {
      backgroundColor: "#2980b9",
    },
  },
  authLink: {
    color: "#3498db",
    cursor: "pointer",
    marginTop: "15px",
    display: "inline-block",
  },
};

export const dashboardStyles = {
  header: {
    backgroundColor: "#2c3e50",
    color: "white",
    padding: "20px",
    borderRadius: "8px",
    marginBottom: "20px",
  },
  welcomeText: {
    fontSize: "24px",
    margin: 0,
  },
  menuContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    margin: "20px 0",
  },
  menuButton: {
    padding: "12px 20px",
    backgroundColor: "#3498db",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    textDecoration: "none",
    fontSize: "16px",
    "&:hover": {
      backgroundColor: "#2980b9",
    },
  },
};

export const walletStyles = {
  balanceCard: {
    background: "linear-gradient(135deg, #6e8efb, #a777e3)",
    color: "white",
    padding: "25px",
    borderRadius: "10px",
    textAlign: "center",
    marginBottom: "30px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  balanceAmount: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    margin: "15px 0",
  },
  actionButton: {
    padding: "12px 25px",
    backgroundColor: "#2ecc71",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    margin: "0 10px",
    "&:hover": {
      backgroundColor: "#27ae60",
    },
  },
  withdrawButton: {
    backgroundColor: "#e74c3c",
    "&:hover": {
      backgroundColor: "#c0392b",
    },
  },
  transactionItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px",
    backgroundColor: "white",
    borderRadius: "8px",
    marginBottom: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
  },
};

export const gameStyles = {
  gameContainer: {
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "25px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  slotMachine: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    margin: "30px 0",
  },
  slotReel: {
    width: "80px",
    height: "80px",
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "40px",
    boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.1)",
  },
  spinButton: {
    padding: "15px 40px",
    backgroundColor: "#e74c3c",
    color: "white",
    border: "none",
    borderRadius: "50px",
    fontSize: "18px",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(231, 76, 60, 0.3)",
    "&:hover": {
      backgroundColor: "#c0392b",
    },
  },
};

export const modalStyles = {
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: "white",
    padding: "25px",
    borderRadius: "10px",
    width: "350px",
    maxWidth: "90%",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
  },
  modalTitle: {
    marginTop: 0,
    color: "#2c3e50",
  },
  modalInput: {
    width: "100%",
    padding: "12px",
    margin: "15px 0",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "16px",
  },
  modalButton: {
    padding: "12px 20px",
    marginRight: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  confirmButton: {
    backgroundColor: "#2ecc71",
    color: "white",
    "&:hover": {
      backgroundColor: "#27ae60",
    },
  },
  cancelButton: {
    backgroundColor: "#e74c3c",
    color: "white",
    "&:hover": {
      backgroundColor: "#c0392b",
    },
  },
};

// Fungsi untuk menerapkan styles
export function applyStyles(element, styles) {
  Object.assign(element.style, styles);
}
