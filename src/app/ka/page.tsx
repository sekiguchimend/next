'use client';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { useState, useEffect, useRef } from 'react';
import './Chat.css';

interface Message {
  id: number;
  content: string;
  // 他の必要なプロパティがあれば追加
}

export default function Chat() {
  const [supabase, setSupabase] = useState<SupabaseClient | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (supabaseUrl && supabaseAnonKey) {
      const client = createClient(supabaseUrl, supabaseAnonKey);
      setSupabase(client);
      fetchMessages(client);
    } else {
      console.error('Supabase environment variables are missing');
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const fetchMessages = async (client: SupabaseClient) => {
    const { data, error } = await client
      .from('kayou')
      .select('*')
      .order('id', { ascending: true });

    if (error) {
      console.error('Error fetching messages:', error);
    } else {
      setMessages(data as Message[] ?? []);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || !supabase) return;

    const { data, error } = await supabase
      .from('kayou')
      .insert([{ content: inputText }])
      .select();

    if (error) {
      console.error('Error inserting message:', error);
    } else {
      setMessages(prevMessages => [...prevMessages, ...(data as Message[] ?? [])]);
      setInputText('');
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="chat-app">
      <header className="chat-header">
        <a href="/" className="back-link">
          <img src='back.png' alt="Back" />
        </a>
        <h1>踊るさんま御殿</h1>
      </header>
      <div className="chat-messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <div className="message-content">{message.content}</div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSubmit} className="chat-input">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="メッセージを入力"
        />
        <button type="submit">送信</button>
      </form>
    </div>
  );
}