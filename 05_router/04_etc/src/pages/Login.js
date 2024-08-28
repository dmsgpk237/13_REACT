
function Login() {
    return(
        <>
            <h2>🙊Login🙈</h2>
            <label>ID : </label>
            <input type="text" name="id" placeholder="아이디를 입력하세요"/>
            <br/>
            <label>PW : </label>
            <input type="password" name="pw" placeholder="비밀번호를 입력하세요"/>
            <br/>
            <button>Login</button>
        </>
    )
}

export default Login;