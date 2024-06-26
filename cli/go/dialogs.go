// dialogs.go

package main

import (
	"fmt"
	"strings"
)

// ShowWelcomeMessage displays the welcome message
func ShowWelcomeMessage() {
    fmt.Println("🔴 Reliverse Go Edition is still in early development")
    fmt.Println("🔴 Please use TS Edition for now -> bunx relivator")
    fmt.Println("")
    fmt.Println("🟢 Reliverse CLI v0.4.0")
    fmt.Println("▲ Issue? Hotline: https://discord.gg/Pb8uKbwpsJ")
    fmt.Println("")
    fmt.Println("Hello and thank you for testing the Reliverse CLI Go Edition! This is still an early alpha version, so we apologize if you encounter any issues. Please use TS Edition to get full expirience, because Go Edition currently is not-ready.") 
    fmt.Println("")
    fmt.Println("Please reach out on Discord to report any, as well as to provide any suggestions on how to improve our wizard. Really, thanks so much! And good luck with your Relivator-based web-app deployment!") 
    fmt.Println("")
    fmt.Println("🦄 Hey there! Did someone say Reli? It's me! Your friend and personal AI assistant! I'm here to help you deploy Relivator. Let's get started!")
}

// AskForInstallationConfirmation asks the user if they want to start the installation
func AskForInstallationConfirmation() bool {
    fmt.Println("")
    fmt.Println("🦄 So far, I have only been trained to install the full version of Relivator for you, where you will need to specify your database in your .env file. In the future I will can install also the simplest possible Relivator's edition, which does not require any additional configuration. But, for now, are you ready to install the latest full-featured Relivator?")
    fmt.Println("")
    fmt.Println("🔵 Type Y to start the installation (please wait for completion), N to cancel, then press Enter.")
    fmt.Println("")
    var response string
    fmt.Scanln(&response)
    return strings.ToLower(response) == "y"
}

// AskToReadReadme asks the user if they want to read the Relivator's README
func AskToReadReadme() bool {
    fmt.Println("")
    fmt.Println("📖 Do you want to read the Relivator's README? [Y/N]")
    fmt.Println("")
    var readResponse string
    fmt.Scanln(&readResponse)
    return strings.ToLower(readResponse) == "y"
}
