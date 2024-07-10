"use client"
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../comport/header';
import styles from "./Mail.module.css";
const TextControlsExample = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [id]: value
        }));
    };

    const sendEmail = async (data: { name: string; email: string; message: string }) => {
        try {
            const response = await fetch("/api/route", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                console.log("成功");
                alert("メールが送信されました");
            } else {
                const errorData = await response.json();
                console.error("エラー: ", errorData.error);
                alert("メールの送信に失敗しました: " + errorData.error);
            }
        } catch (error) {
            console.error("Fetch error: ", error);
            alert("ネットワークエラーが発生しました");
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const dataToSend = { ...formData };
        
        // フォームをすぐにクリア
        setFormData({ name: '', email: '', message: '' });
        
        // メール送信処理
        sendEmail(dataToSend);
    };

    return (
        <>
            <Header />
            <Form className={styles.form} onSubmit={handleSubmit}>
                <Form.Group className={styles.title}>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        id="email"
                        type="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group className={styles.name}>
                    <Form.Label>Email 名前</Form.Label>
                    <Form.Control
                        id="name"
                        placeholder="your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group className={styles.mail}>
                    <Form.Label>Example テキストエリア</Form.Label>
                    <Form.Control
                        id="message"
                        as="textarea"
                        rows={3}
                        className={styles.area}
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Button variant="outline-dark" type="submit">送信</Button>
            </Form>
        </>
    );
};

export default TextControlsExample;