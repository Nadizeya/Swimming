import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Logo from "@/components/logo";

const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please input a valid email address"),
  password: z.string().min(1, "Password is required"),
});

type LoginFormData = z.infer<typeof loginSchema>;

const Login = () => {
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormData) => {
    console.log("Logging in with:", data);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[url('/assets/background.png')] bg-cover bg-center p-4">
      <Logo src="/assets/loginLogo.png" />
      <Card className="w-full max-w-md mt-6 shadow-lg border-none rounded-2xl bg-white">
        <CardContent className="p-4 px-20 space-y-6 ">
          <h1 className="text-[27px] font-bold text-center text-swimigo-red leading-tight">
            Club Login
          </h1>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-[2px]"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel
                      className="absolute left-3 top-1 text-xs text-swimigo-blue transition-all 
                      peer-placeholder-shown:top-3.5 
                      peer-placeholder-shown:text-sm 
                      peer-placeholder-shown:text-gray-400 
                      peer-focus:top-1 
                      peer-focus:text-xs 
                      peer-focus:text-swimigo-blue"
                    >
                      E-MAIL
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder=" "
                        type="email"
                        className="peer h-12 px-3 pt-5 text-sm placeholder-transparent rounded-xl"
                        {...field}
                      />
                    </FormControl>
                    <div className="min-h-[16px] mt-1">
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              {/* Password Field */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormControl>
                      <Input
                        placeholder="PASSWORD"
                        type="password"
                        className="h-12 px-3 rounded-xl"
                        {...field}
                      />
                    </FormControl>
                    <div className="min-h-[16px] mt-1">
                      <FormMessage />
                    </div>{" "}
                  </FormItem>
                )}
              />

              {/* Remember Me */}
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="remember" className="w-4 h-4" />
                <label htmlFor="remember" className="text-sm">
                  Remember Me?
                </label>
              </div>

              {/* Submit */}
              <div className="mt-6">
                <Button
                  type="submit"
                  className="w-full bg-swimigo-red text-white font-bold tracking-widest"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? "Logging in..." : "LOGIN"}
                </Button>
                <div className="text-center text-sm mt-2">
                  <a href="#" className="font-bold underline">
                    Forgot password?
                  </a>
                </div>
              </div>
            </form>
          </Form>

          {/* Forgot Password */}
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
