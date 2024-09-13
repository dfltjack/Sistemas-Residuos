import React from 'react';
import { Container } from 'react-bootstrap';

export default function Dashboard() {
    const userName = localStorage.getItem('userName'); // Recupera o nome do usuário
    console.log(localStorage.getItem('userName')); // Deve mostrar o nome do usuário
    console.log('UserName:', userName);

    return (
        <Container className="mt-4">
            <h1>Bem-vindo, {userName || 'Usuário'}!</h1> {/* Exibe 'Usuário' se userName for undefined */}
            {/* Outros conteúdos da página */}
        </Container>
        
    );
}
