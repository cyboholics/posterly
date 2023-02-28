import {Container} from "@/components/base/Container";
import {useSession, signIn, signOut} from "next-auth/react"

export const Navbar = () => {
    const {data: session} = useSession()
    return <Container
        style={{
            backgroundColor: "teal",
            position: "fixed",
            top: 0,
            width: "100%",
            height: "60px",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
        }}
    >
        <h1 style={{
            color: "white",
            fontStyle: "bold",
            marginLeft: "20px"
        }}>Posterly</h1>
        {session?.user ?
            <>
                <button style={{
                    backgroundColor: "white",
                    color: "black",
                    width: "110px",
                    height: "45px",
                    borderRadius: "10px",
                    margin: "0 10px 0 0"
                }}
                        onClick={() => signOut()}
                >
                    <h2 style={{margin: "0"}}>{(session.user.name)?.substring(0, Math.min(6, session.user.name?.length))}</h2>
                </button>
            </> :
            <button style={{
                backgroundColor: "white",
                color: "black",
                width: "100px",
                height: "45px",
                borderRadius: "10px",
                margin: "0 10px 0 0"
            }}
                    onClick={() => signIn()}
            >
                <h2 style={{margin: "0"}}>Sign in</h2>
            </button>
        }
    </Container>
}