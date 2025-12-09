import React, { useMemo, useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";


import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";


import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";
ModuleRegistry.registerModules([AllCommunityModule]);




const EMPLOYEES = [
  {
    id: 1,
    firstName: "John",
    lastName: "Smith",
    email: "john.smith@company.com",
    department: "Engineering",
    position: "Senior Developer",
    salary: 95000,
    hireDate: "2021-03-15",
    age: 32,
    location: "New York",
    performanceRating: 4.2,
    projectsCompleted: 12,
    isActive: true,
    skills: ["JavaScript", "React", "Node.js"],
    manager: "Sarah Johnson"
  },
  {
    id: 2,
    firstName: "Emily",
    lastName: "Davis",
    email: "emily.davis@company.com",
    department: "Marketing",
    position: "Marketing Manager",
    salary: 78000,
    hireDate: "2020-07-22",
    age: 29,
    location: "Los Angeles",
    performanceRating: 4.5,
    projectsCompleted: 8,
    isActive: true,
    skills: ["Digital Marketing", "SEO", "Analytics"],
    manager: "Michael Brown"
  },
  {
    id: 3,
    firstName: "Michael",
    lastName: "Brown",
    email: "michael.brown@company.com",
    department: "Marketing",
    position: "VP Marketing",
    salary: 125000,
    hireDate: "2019-01-10",
    age: 38,
    location: "Los Angeles",
    performanceRating: 4.7,
    projectsCompleted: 15,
    isActive: true,
    skills: ["Strategy", "Leadership", "Brand Management"],
    manager: null
  },
  {
    id: 4,
    firstName: "Sarah",
    lastName: "Johnson",
    email: "sarah.johnson@company.com",
    department: "Engineering",
    position: "Engineering Manager",
    salary: 115000,
    hireDate: "2018-11-05",
    age: 35,
    location: "New York",
    performanceRating: 4.6,
    projectsCompleted: 18,
    isActive: true,
    skills: ["Team Leadership", "Architecture", "Python"],
    manager: "David Wilson"
  },
  {
    id: 5,
    firstName: "David",
    lastName: "Wilson",
    email: "david.wilson@company.com",
    department: "Engineering",
    position: "CTO",
    salary: 180000,
    hireDate: "2017-05-12",
    age: 42,
    location: "New York",
    performanceRating: 4.8,
    projectsCompleted: 25,
    isActive: true,
    skills: ["Technical Strategy", "Leadership", "Cloud Architecture"],
    manager: null
  },
  {
    id: 6,
    firstName: "Lisa",
    lastName: "Garcia",
    email: "lisa.garcia@company.com",
    department: "Sales",
    position: "Sales Representative",
    salary: 65000,
    hireDate: "2022-02-28",
    age: 26,
    location: "Chicago",
    performanceRating: 3.9,
    projectsCompleted: 6,
    isActive: true,
    skills: ["CRM", "Negotiation", "Customer Relations"],
    manager: "Robert Martinez"
  },
  {
    id: 7,
    firstName: "Robert",
    lastName: "Martinez",
    email: "robert.martinez@company.com",
    department: "Sales",
    position: "Sales Manager",
    salary: 92000,
    hireDate: "2020-09-14",
    age: 34,
    location: "Chicago",
    performanceRating: 4.3,
    projectsCompleted: 11,
    isActive: true,
    skills: ["Sales Strategy", "Team Management", "B2B Sales"],
    manager: "Jennifer Lee"
  },
  {
    id: 8,
    firstName: "Jennifer",
    lastName: "Lee",
    email: "jennifer.lee@company.com",
    department: "Sales",
    position: "VP Sales",
    salary: 135000,
    hireDate: "2019-06-18",
    age: 40,
    location: "Chicago",
    performanceRating: 4.6,
    projectsCompleted: 16,
    isActive: true,
    skills: ["Strategic Sales", "Leadership", "Market Analysis"],
    manager: null
  },
  {
    id: 9,
    firstName: "James",
    lastName: "Anderson",
    email: "james.anderson@company.com",
    department: "HR",
    position: "HR Specialist",
    salary: 58000,
    hireDate: "2021-08-30",
    age: 28,
    location: "Austin",
    performanceRating: 4.0,
    projectsCompleted: 7,
    isActive: true,
    skills: ["Recruitment", "Employee Relations", "HRIS"],
    manager: "Karen White"
  },
  {
    id: 10,
    firstName: "Karen",
    lastName: "White",
    email: "karen.white@company.com",
    department: "HR",
    position: "HR Manager",
    salary: 85000,
    hireDate: "2019-12-02",
    age: 36,
    location: "Austin",
    performanceRating: 4.4,
    projectsCompleted: 13,
    isActive: true,
    skills: ["HR Strategy", "Policy Development", "Leadership"],
    manager: null
  },
  {
    id: 11,
    firstName: "Alex",
    lastName: "Thompson",
    email: "alex.thompson@company.com",
    department: "Engineering",
    position: "Junior Developer",
    salary: 72000,
    hireDate: "2023-01-16",
    age: 24,
    location: "New York",
    performanceRating: 3.8,
    projectsCompleted: 4,
    isActive: true,
    skills: ["Java", "Spring Boot", "MySQL"],
    manager: "Sarah Johnson"
  },
  {
    id: 12,
    firstName: "Maria",
    lastName: "Rodriguez",
    email: "maria.rodriguez@company.com",
    department: "Finance",
    position: "Financial Analyst",
    salary: 68000,
    hireDate: "2021-11-08",
    age: 30,
    location: "Miami",
    performanceRating: 4.1,
    projectsCompleted: 9,
    isActive: true,
    skills: ["Financial Modeling", "Excel", "SAP"],
    manager: "Thomas Clark"
  },
  {
    id: 13,
    firstName: "Thomas",
    lastName: "Clark",
    email: "thomas.clark@company.com",
    department: "Finance",
    position: "Finance Manager",
    salary: 98000,
    hireDate: "2018-04-25",
    age: 37,
    location: "Miami",
    performanceRating: 4.5,
    projectsCompleted: 14,
    isActive: true,
    skills: ["Financial Planning", "Budget Management", "Leadership"],
    manager: null
  },
  {
    id: 14,
    firstName: "Amanda",
    lastName: "Taylor",
    email: "amanda.taylor@company.com",
    department: "Marketing",
    position: "Content Specialist",
    salary: 55000,
    hireDate: "2022-06-12",
    age: 25,
    location: "Los Angeles",
    performanceRating: 3.7,
    projectsCompleted: 5,
    isActive: true,
    skills: ["Content Writing", "Social Media", "Adobe Creative"],
    manager: "Michael Brown"
  },
  {
    id: 15,
    firstName: "Ryan",
    lastName: "Miller",
    email: "ryan.miller@company.com",
    department: "Engineering",
    position: "DevOps Engineer",
    salary: 88000,
    hireDate: "2020-10-19",
    age: 31,
    location: "Seattle",
    performanceRating: 4.3,
    projectsCompleted: 10,
    isActive: true,
    skills: ["AWS", "Docker", "Kubernetes"],
    manager: "Sarah Johnson"
  },
  {
    id: 16,
    firstName: "Jessica",
    lastName: "Moore",
    email: "jessica.moore@company.com",
    department: "Sales",
    position: "Account Executive",
    salary: 75000,
    hireDate: "2021-04-03",
    age: 27,
    location: "Denver",
    performanceRating: 4.0,
    projectsCompleted: 8,
    isActive: false,
    skills: ["Account Management", "Salesforce", "Presentation"],
    manager: "Robert Martinez"
  },
  {
    id: 17,
    firstName: "Daniel",
    lastName: "Harris",
    email: "daniel.harris@company.com",
    department: "Finance",
    position: "Senior Accountant",
    salary: 73000,
    hireDate: "2019-08-14",
    age: 33,
    location: "Miami",
    performanceRating: 4.2,
    projectsCompleted: 12,
    isActive: true,
    skills: ["Accounting", "Tax Preparation", "QuickBooks"],
    manager: "Thomas Clark"
  },
  {
    id: 18,
    firstName: "Nicole",
    lastName: "Jackson",
    email: "nicole.jackson@company.com",
    department: "HR",
    position: "Recruiter",
    salary: 62000,
    hireDate: "2022-09-05",
    age: 29,
    location: "Austin",
    performanceRating: 3.9,
    projectsCompleted: 6,
    isActive: true,
    skills: ["Talent Acquisition", "LinkedIn Recruiter", "Interviewing"],
    manager: "Karen White"
  },
  {
    id: 19,
    firstName: "Kevin",
    lastName: "Wright",
    email: "kevin.wright@company.com",
    department: "Engineering",
    position: "QA Engineer",
    salary: 76000,
    hireDate: "2020-12-07",
    age: 30,
    location: "Seattle",
    performanceRating: 4.1,
    projectsCompleted: 11,
    isActive: false,
    skills: ["Test Automation", "Selenium", "API Testing"],
    manager: "Sarah Johnson"
  },
  {
    id: 20,
    firstName: "Stephanie",
    lastName: "Lopez",
    email: "stephanie.lopez@company.com",
    department: "Marketing",
    position: "Digital Marketing Specialist",
    salary: 64000,
    hireDate: "2021-12-20",
    age: 26,
    location: "Phoenix",
    performanceRating: 3.8,
    projectsCompleted: 7,
    isActive: false,
    skills: ["Google Ads", "Facebook Ads", "Email Marketing"],
    manager: "Michael Brown"
  }
];

export default function App() {
  const gridRef = useRef(null);
  const [rowData] = useState(EMPLOYEES);
  const [searchText, setSearchText] = useState("");


  const columnDefs = useMemo(
    () => [
      { headerName: "ID", field: "id", width: 100, filter: "agNumberColumnFilter" },
      {
        headerName: "Name",
        field: "firstName",
        valueGetter: (p) => `${p.data.firstName} ${p.data.lastName}`,
        flex: 1,
        minWidth: 150,
        filter: "agTextColumnFilter"
      },
      { headerName: "Email", field: "email", flex: 1.5, minWidth: 200, filter: "agTextColumnFilter" },
      { headerName: "Department", field: "department", width: 130, filter: "agTextColumnFilter" },
      { headerName: "Position", field: "position", flex: 1, minWidth: 150, filter: "agTextColumnFilter" },
      {
        headerName: "Salary",
        field: "salary",
        width: 120,
        filter: "agNumberColumnFilter",
        valueFormatter: (p) => p.value ? `$${p.value.toLocaleString()}` : ""
      },
      { headerName: "Hire Date", field: "hireDate", width: 120, filter: "agDateColumnFilter" },
      { headerName: "Location", field: "location", width: 120, filter: "agTextColumnFilter" },
      { headerName: "Rating", field: "performanceRating", width: 100, filter: "agNumberColumnFilter" },
      { headerName: "Projects", field: "projectsCompleted", width: 110, filter: "agNumberColumnFilter", aggFunc: "sum" },
      {
        headerName: "Active",
        field: "isActive",
        width: 90,
        valueFormatter: (p) => (p.value ? "Yes" : "No")
      }
    ],
    []
  );

  const defaultColDef = useMemo(() => ({
    sortable: true,
    filter: true,
    resizable: true,
    floatingFilter: true,
    minWidth: 80
  }), []);


  const [selectedRows, setSelectedRows] = useState([]);

  const onSelectionChanged = () => {
    const selected = gridRef.current?.api?.getSelectedRows() || [];
    setSelectedRows(selected);
  };


  const onSearch = (e) => {
    const v = e.target.value;
    setSearchText(v);
    gridRef.current?.api?.setGridOption("quickFilterText", v);
  };


  const onExportCsv = () => {
    gridRef.current?.api?.exportDataAsCsv();
  };


  const onClearSelection = () => {
  gridRef.current?.api?.deselectAll();     
  setSearchText("");                       
  gridRef.current?.api?.setGridOption("quickFilterText", "");
};

  return (
    <div style={{
      display: "flex",
      gap: 20,
      height: "100vh",
      background: "linear-gradient(135deg,rgb(0, 0, 0) 0%,rgb(0, 119, 255) 100%)",
      boxSizing: "border-box",
      padding: 20,
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    }}>
      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .stat-card {
          transition: all 0.3s ease;
        }
        .stat-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgb(169, 209, 255);
        }
        .action-btn {
          transition: all 0.3s ease;
        }
        .action-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgb(169, 209, 255);
        }
        .search-input {
          transition: all 0.3s ease;
        }
        .search-input:focus {
          box-shadow: 0 0 0 3px rgb(169, 209, 255);
          border-color: rgb(0, 0, 0);
          outline: none;
        }
        .detail-card {
          animation: fadeIn 0.4s ease-out;
          transition: all 0.3s ease;
        }
        .detail-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0,0,0,0);
        }
        
        /* Custom scrollbar styling */
        ::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }
        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb {
          background: rgb(0, 119, 255);
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: rgb(0, 119, 255);
        }
      `}</style>

      <div style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        background: "rgb(255, 255, 255)",
        borderRadius: 16,
        padding: 20,
        boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
        backdropFilter: "blur(10px)",
        animation: "slideInLeft 0.6s ease-out",
        minWidth: 0
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
          <div className="glow-box">
            <h2 style={{ margin: 0, color: "white", fontSize: 20, fontWeight: 750 }}>
              FactWise Dashboard
            </h2>
          </div>

          <style>
            {`
.glow-box {
  padding: 10px 18px;
  border-radius: 12px;
  color: white;
  animation: gradientShift 2s ease infinite;
  background: linear-gradient(135deg, #0077ff,rgb(0, 0, 0),rgb(0, 0, 0),rgb(0, 119, 255));
  background-size: 400% 400%;
}

@keyframes gradientShift {
  0% { background-position: 0% 40%; }
  50% { background-position:100% 40%; }
  100% { background-position: 0% 40%; }
}
}
`}
          </style>


          <div style={{ marginLeft: "20px", paddingRight: "20px", display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
            <input
              placeholder="🔍 Search across rows..."
              onChange={onSearch}
              value={searchText}
              className="search-input"
              style={{
                padding: "10px 14px",
                borderRadius: 10,
                border: "2px solid #e0e7ff",
                fontSize: 14,
                width: 220,
                background: "white"
              }}
            />
            <button
              onClick={onClearSelection}
              className="action-btn"
              style={{
                padding: "10px 18px",
                borderRadius: 10,
                cursor: "pointer",
                background: "linear-gradient(135deg,rgb(0, 0, 0) 0%, rgb(0, 119, 255) 100%)",
                color: "white",
                border: "none",
                fontWeight: 600,
                fontSize: 14,
                whiteSpace: "nowrap"
              }}
            >
              🗑️ Clear
            </button>
            <button
              onClick={onExportCsv}
              className="action-btn"
              style={{
                padding: "10px 18px",
                borderRadius: 10,
                cursor: "pointer",
                background: "linear-gradient(135deg,rgb(0, 0, 0) 0%, rgb(0, 119, 255) 100%)",
                color: "white",
                border: "none",
                fontWeight: 600,
                fontSize: 14,
                whiteSpace: "nowrap"
              }}
            >
              📊 Export CSV
            </button>
          </div>
        </div>

        <div className="ag-theme-alpine" style={{
          flex: 1,
          borderRadius: 12,
          overflow: "hidden",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
          minHeight: 0
        }}>
          <AgGridReact
            ref={gridRef}
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            theme="legacy"


            rowSelection={{ mode: "multiRow", enableClickSelection: true }}

            pagination={true}
            paginationPageSize={10}
            paginationPageSizeSelector={[10, 20, 50, 100]}
            animateRows={true}
            onSelectionChanged={onSelectionChanged}
            suppressRowClickSelection={false}
          />
        </div>

        <div style={{ marginTop: 16, display: "flex", gap: 12, flexWrap: "wrap" }}>
          <div className="stat-card" style={{
            padding: "14px 20px",
            background: "linear-gradient(135deg,rgb(0, 0, 0) 0%, rgb(0, 119, 255) 100%)",
            borderRadius: 12,
            color: "white",
            flex: 1,
            minWidth: 140,
          }}>
            <div style={{ fontSize: 12, opacity: 0.9, marginBottom: 4 }}>Total Rows</div>
            <div style={{ fontSize: 26, fontWeight: 700 }}>{rowData.length}</div>
          </div>
          <div className="stat-card" style={{
            padding: "14px 20px",
            background: "linear-gradient(135deg,rgb(0, 0, 0) 0%, rgb(0, 119, 255) 100%)",
            borderRadius: 12,
            color: "white",
            flex: 1,
            minWidth: 140,
          }}>
            <div style={{ fontSize: 12, opacity: 0.9, marginBottom: 4 }}>Selected</div>
            <div style={{ fontSize: 26, fontWeight: 700 }}>{selectedRows.length}</div>
          </div>
        </div>
      </div>

      <aside style={{
        width: 360,
        maxWidth: "100%",
        background: "rgba(255, 255, 255, 0.95)",
        borderRadius: 16,
        padding: 20,
        boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
        backdropFilter: "blur(10px)",
        overflowY: "auto",
        animation: "slideInRight 0.6s ease-out"
      }}>
        <div style={{
          background: "linear-gradient(135deg,rgb(0, 0, 0) 0%, rgb(0, 119, 255) 100%)",
          padding: "14px 18px",
          borderRadius: 12,
          marginBottom: 16,
        }}>
          <h3 style={{ margin: 0, color: "white", fontSize: 18, fontWeight: 700 }}>
            📋 Selected Details
          </h3>
          {selectedRows.length > 0 && (
            <div style={{ fontSize: 12, opacity: 0.9, marginTop: 4, color: "white" }}>
              {selectedRows.length} employee{selectedRows.length > 1 ? 's' : ''} selected
            </div>
          )}
        </div>

        {selectedRows.length === 0 && (
          <div style={{
            color: "#9ca3af",
            textAlign: "center",
            padding: "40px 20px",
            background: "linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)",
            borderRadius: 12,
            fontSize: 14,
            lineHeight: 1.6
          }}>
            👆 Select one or more employees<br />to view their details
          </div>
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {selectedRows.map((r) => (
            <div key={r.id} className="detail-card" style={{
              padding: 16,
              background: "linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)",
              border: "2px solid #e5e7eb",
              borderRadius: 12,
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)"
            }}>
              <div style={{
                background: "linear-gradient(135deg,rgb(0, 0, 0) 0%, rgb(0, 119, 255) 100%)",
                color: "white",
                padding: "10px 14px",
                borderRadius: 8,
                marginBottom: 12,
              }}>
                <div style={{ fontSize: 16, fontWeight: 700 }}>{r.firstName} {r.lastName}</div>
                <div style={{ fontSize: 12, opacity: 0.95, marginTop: 2 }}>{r.position}</div>
              </div>

              <div style={{ fontSize: 12, color: "#6b7280", marginBottom: 10, wordBreak: "break-word" }}>
                ✉️ {r.email}
              </div>

              <div style={{
                display: "grid",
                gap: 6,
                paddingTop: 8,
                paddingBottom: 8
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
                  <span style={{ color: "#6b7280" }}>Department:</span>
                  <span style={{ fontWeight: 600, color: "#374151" }}>{r.department}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
                  <span style={{ color: "#6b7280" }}>Location:</span>
                  <span style={{ fontWeight: 600, color: "#374151" }}>📍 {r.location}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
                  <span style={{ color: "#6b7280" }}>Salary:</span>
                  <span style={{ fontWeight: 700, color: "#10b981" }}>💰 ${r.salary.toLocaleString()}</span>
                </div>
              </div>

              <div style={{
                marginTop: 10,
                padding: 10,
                background: "linear-gradient(135deg,rgb(255, 255, 255) 0%, rgb(0, 119, 255) 100%)",
                borderRadius: 8,
                border: "3px solid #bae6fd"
              }}>
                <div style={{ fontSize: 11, color: "#0369a1", fontWeight: 600, marginBottom: 4 }}>
                  🎯 Skills
                </div>
                <div style={{ fontSize: 12, color: "#000000", lineHeight: 1.5, fontWeight: 500 }}>
                  {Array.isArray(r.skills) ? r.skills.join(" • ") : r.skills}
                </div>
              </div>
            </div>
          ))}
        </div>

      </aside>
    </div>
  );
}