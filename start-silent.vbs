Option Explicit

Dim ws, fso, currentDir, launcherPath, nodeExe, candidates, candidate, command
Set ws = CreateObject("WScript.Shell")
Set fso = CreateObject("Scripting.FileSystemObject")

currentDir = fso.GetParentFolderName(WScript.ScriptFullName)
launcherPath = fso.BuildPath(currentDir, "launcher.js")
ws.CurrentDirectory = currentDir

nodeExe = "node.exe"
candidates = Array( _
  ws.ExpandEnvironmentStrings("%ProgramFiles%") & "\nodejs\node.exe", _
  ws.ExpandEnvironmentStrings("%LOCALAPPDATA%") & "\Programs\nodejs\node.exe", _
  ws.ExpandEnvironmentStrings("%ProgramFiles(x86)%") & "\nodejs\node.exe" _
)

For Each candidate In candidates
  If fso.FileExists(candidate) Then
    nodeExe = candidate
    Exit For
  End If
Next

If Not fso.FileExists(launcherPath) Then WScript.Quit 1

command = Quote(nodeExe) & " " & Quote(launcherPath)
ws.Run command, 0, False

Function Quote(value)
  Quote = Chr(34) & value & Chr(34)
End Function
