import React from 'react'
import { FiMessageSquare, FiAlertCircle, FiUsers, FiPhone } from 'react-icons/fi'

export const ConversationsFooter = () => {
    return (
        <footer style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            position: "sticky",
            bottom: 0,
            width: "100%",
            color: "#b1b3b5",
            padding: "10px 0",
            zIndex: 100,
            backgroundColor: "white",
            boxShadow: "0 -1px 2px rgba(0,0,0,0.1)",
        }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ position: 'relative', display: 'inline-block' }}>
                    <FiMessageSquare size={22} />
                    <span style={{
                        position: 'absolute',
                        top: -6,
                        right: -10,
                        background: '#25d366',
                        color: 'white',
                        borderRadius: '50%',
                        minWidth: 18,
                        height: 18,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 12,
                        fontWeight: 600,
                        boxShadow: '0 1px 2px rgba(0,0,0,0.15)'
                    }}>7</span>
                </div>
                <span style={{ fontSize: 12, marginTop: 2 }}>Chats</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <FiAlertCircle size={22} />
                <span style={{ fontSize: 12, marginTop: 2 }}>Novedades</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <FiUsers size={22} />
                <span style={{ fontSize: 12, marginTop: 2 }}>Comunidades</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <FiPhone size={22} />
                <span style={{ fontSize: 12, marginTop: 2 }}>Llamadas</span>
            </div>
        </footer>
    )
}
