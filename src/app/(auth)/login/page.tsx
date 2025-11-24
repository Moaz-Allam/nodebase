import { LoginForm } from "@/src/features/auth/components/login-form";
import { requireUnAuth } from "@/src/lib/auth-utils";

const Page = async () => {
    await requireUnAuth();
    return (
        <div>
            <LoginForm />
        </div>
    );
}

export default Page;