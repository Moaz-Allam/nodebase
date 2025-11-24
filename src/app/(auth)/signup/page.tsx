import { RegisterForm } from "@/src/features/auth/components/register-form";
import { requireUnAuth } from "@/src/lib/auth-utils";

const Page = async () => {
    await requireUnAuth();
    
    return (
        <div>
            <RegisterForm />
        </div>
    );
}

export default Page;