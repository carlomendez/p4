
import AuthChecker from "@components/AuthChecker"
import Sidebar from "@components/sidebar/Sidebar";

export default function DashboardLayout({
    children
  }) {
    return (
        <AuthChecker>
            <div className="flex w-full">
                <div className=" p-5 min-h-screen">
                    <Sidebar/>
                </div>
                <div className="flex-auto p-5">{children}</div>
            </div>

        </AuthChecker>
    )
  }