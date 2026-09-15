Set ws = CreateObject("Wscript.Shell")
Set fso = CreateObject("Scripting.FileSystemObject")
currentDir = fso.GetParentFolderName(WScript.ScriptFullName)
ws.CurrentDirectory = currentDir

nodeExe = "node.exe"
If fso.FileExists("D:\program Files\nodejs\node.exe") Then
    nodeExe = """D:\program Files\nodejs\node.exe"""
End If

ws.Run nodeExe & " """ & currentDir & "\launcher.js""", 0, False
