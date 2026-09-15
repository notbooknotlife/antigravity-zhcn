Option Explicit

Dim ws, fso, currentDir, launcherPath, nodeExe, command
Set ws = CreateObject("WScript.Shell")
Set fso = CreateObject("Scripting.FileSystemObject")

currentDir = fso.GetParentFolderName(WScript.ScriptFullName)
launcherPath = fso.BuildPath(currentDir, "launcher.js")
ws.CurrentDirectory = currentDir

If Not fso.FileExists(launcherPath) Then WScript.Quit 1

nodeExe = FindNode()

command = Quote(nodeExe) & " " & Quote(launcherPath)
ws.Run command, 0, False

Function FindNode()
  Dim exec, candidate, candidates, item

  ' The Run key may receive a different PATH after login, so query PATH first.
  On Error Resume Next
  Set exec = ws.Exec("where.exe node.exe")
  If Err.Number = 0 Then
    Do Until exec.StdOut.AtEndOfStream
      candidate = Trim(exec.StdOut.ReadLine)
      If Len(candidate) > 0 And fso.FileExists(candidate) Then
        FindNode = candidate
        Exit Function
      End If
    Loop
  End If
  Err.Clear
  On Error GoTo 0

  candidates = Array( _
    ws.ExpandEnvironmentStrings("%ProgramFiles%") & "\nodejs\node.exe", _
    ws.ExpandEnvironmentStrings("%LOCALAPPDATA%") & "\Programs\nodejs\node.exe", _
    ws.ExpandEnvironmentStrings("%ProgramFiles(x86)%") & "\nodejs\node.exe" _
  )

  For Each item In candidates
    If fso.FileExists(item) Then
      FindNode = item
      Exit Function
    End If
  Next

  FindNode = "node.exe"
End Function

Function Quote(value)
  Quote = Chr(34) & value & Chr(34)
End Function
