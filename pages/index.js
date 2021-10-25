import Head from 'next/head';
import { Input, Space, Button } from 'antd';
import { EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';
import { tw } from 'twind';

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={tw('mt-10')}>
                <div className={tw('max-w-md mx-auto p-4')}>
                    <h1 className={tw('text-center text-xl mb-4')}>Welcome to Nextjs Workshop</h1>
                    <Input placeholder="Email" className={tw('mb-4 w-full')} />
                    <Space direction="vertical" className={tw('w-full')}>
                        <Input.Password
                            placeholder="input password"
                            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                    </Space>
                    <div className={tw('text-right')}>
                        <Button className={tw('mt-4')}>Login</Button>
                    </div>
                </div>
            </main>
        </div>
    );
}
