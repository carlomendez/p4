
import AuthChecker from "@components/AuthChecker"
import Sidebar from "@components/sidebar/Sidebar";

export default function DashboardLayout({
    children
  }) {
    return (
        <AuthChecker>
            <div className="flex">
                <div className="flex-1 p-5 min-h-screen">
                    <Sidebar/>
                </div>
                <div className="flex-4 p-5">{children}</div>
            </div>

        </AuthChecker>
    )
  }